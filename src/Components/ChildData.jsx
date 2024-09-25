'use client'
import React, { useEffect, useState, useRef } from 'react'
import styles from '../styles/HairColor.module.css'
import { useDataContext } from '@/context/DataContext'
import { stepsJsonData } from "../../public/data/tabsData";
import { Tooltip as ReactTooltip } from 'react-tooltip';

//clone component for showing tooltip
export const Tooltipp = () => {
    return (
        <div>
            <button data-tip="This is a tooltip!">Hover over me!</button>
            <ReactTooltip place="top" type="dark" effect="solid" />
        </div>
    );
};


const ChildData = () => {

    //states that used to save data importing from DataContext where all the state defiened using use-context hook
    const { typeData, setTypeData, childTypeData, setChildTypeData, tabTitle,
        childTypeDataJson, setChildTypeDataJson, selectedChildData, setSelectedChildData,
        tabFiltredJson, setTabFiltredJson, setSelectedSidebarData, currentType, setCurrentType, selectedSideBar, setSelectedSideBar,
        tabElementType, setTabElementType, typeInput, setTypeInput, date, setDate, textArea, setTextArea, typeExtrainformation, setSelectedValue,
        setTypeExtraInformation, childLabel, setChildLabel, childTypeExtraInfo, setChildTypeExtraInfo, setCheckBoxType, checkBoxType, selectedValue
    } = useDataContext()


    //local states for saving data only accesable in this component
    let stateForSave = []

    const [hoverType, setHoverType] = useState("")
    const [hoverChildType, setHoverChildType] = useState("")
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const inputRef = useRef([])

    //selet type  for all elements expect dropdown elements
    const handleSelectType = (element) => {

        if (element?.has_child === true) {
            setCurrentType(element.id)
            setChildLabel(element.title)
            setChildTypeExtraInfo(element.extra_information)
            setChildTypeData(element.childTypes)
            setSelectedSideBar([])
        } else {
            setCurrentType(element.id)
            saveTypeDataToJson(element)
        }
    }


    //select for checkbox
    const handleSelectTypeCheckBox = (element) => {


        //current selected type element
        let id = element.id
        let types = element.childTypes
        setCurrentType(element.id)

        if (element.has_child === true) {
            setChildLabel(element.title)
            setChildTypeExtraInfo(element.extra_information)
        }

        setSelectedSideBar([])

        setCheckBoxType((prevSelectedIds) => {
            // Ensure prevSelectedIds is always an array
            if (!Array.isArray(prevSelectedIds)) {
                return [id]; // Default to a new array with the ID if something goes wrong
            }
            // Check if the ID is already in the array
            if (prevSelectedIds.includes(id)) {
                let data = tabFiltredJson && tabFiltredJson.map(e => e.types).flat()  //.find(item => item.id === id);
                let singleDataToRemove = data && data.find((e => e.id == id))
                let newTabJsonData = singleDataToRemove && tabFiltredJson.filter(e => e.id !== singleDataToRemove.parent)

                if (singleDataToRemove && newTabJsonData.length > 0) {
                    setTabFiltredJson(newTabJsonData)
                    let dataChild = selectedChildData && selectedChildData.filter(e => e.parent != id)
                    setSelectedChildData(dataChild)
                }
                if(newTabJsonData !==undefined && newTabJsonData.length === 0){
                    setTabFiltredJson([])
                    setSelectedChildData([])
                }

                return prevSelectedIds.filter((item) => item !== id);
            } else {
                // ID is not selected, add it
                return [...prevSelectedIds, id];
            }

        });

        if (element.has_child === true) {
            setChildTypeData((prevSelectedItems) => {
                // Create a set of IDs from the input items for quick lookup
                const inputIds = new Set(types.map(item => item.id));

                // Filter out any selected items that are present in the input items (remove them)
                const filteredItems = prevSelectedItems && prevSelectedItems?.filter(item => !inputIds.has(item.id));
                if (filteredItems) {


                    // Add the input items to the filtered list
                    return [...filteredItems, ...types.filter(item => !prevSelectedItems.some(selectedItem => selectedItem.id === item.id))];
                }
            });
        }
    }





    useEffect(() => {
        if (!childTypeData.length) {
            setChildLabel('')
            setChildTypeExtraInfo('')
        }
    }, [childTypeData])

    //selet type  for dropdown elements
    const handleSelectTypeChange = (event) => {
        const selectedType = event.target.value;

        const selectedTypeData = tabElementType?.types.find(item => item?.type == selectedType)
        setSelectedValue(selectedType);


        if (selectedTypeData.has_child === true) {
            setSelectedValue(selectedType);
            setCurrentType(selectedTypeData.id)
            setChildTypeData(selectedTypeData.childTypes)
            setSelectedSideBar([])
            setChildLabel(selectedTypeData.title)
            setChildTypeExtraInfo(selectedTypeData.extra_information)
        } else {
            setSelectedValue(selectedType);
            setCurrentType(selectedTypeData.id)
            setChildTypeData([])
            setSelectedSideBar([])
            setChildLabel()
            setChildTypeExtraInfo()
            saveTypeDataToJson(selectedTypeData)
        }



    }

    useEffect(() => {
        if (hoverType || hoverChildType) {
            const handleMouseMove = (event) => {
                setPosition({ x: event.clientX, y: event.clientY });
            };
            window.addEventListener('mousemove', handleMouseMove);
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, [hoverType, hoverChildType]);



    const saveTypeDataToJson = (element) => {
        let tabData = stepsJsonData.map(item => item.tabs).flat()
        let types = tabData.map((item => item.types)).flat().find(e => e.id === element.id)
        let filtredTab = tabData.find(item => item.id === types.parent)


        let sidebarObject = { ...filtredTab, types: [element] }

        //save input on click 
        if (Object.keys(typeInput).length !== 0 && sidebarObject.has_input === true) {
            Object.keys(typeInput).forEach(key => {
                let dd = typeInput[key].id === sidebarObject?.input?.id
                if (dd === true) {
                    let newInput = { ...sidebarObject.input, value: typeInput[key].input }
                    sidebarObject = { ...sidebarObject, input: newInput }
                }
            });
        }
        //save date on click
        if (Object.keys(date).length !== 0 && sidebarObject.has_date === true) {
            Object.keys(date).forEach(key => {
                let dd = date[key].id === sidebarObject.date.id
                if (dd === true) {
                    let newDate = { ...sidebarObject.date, value: date[key].input }
                    sidebarObject = { ...sidebarObject, date: newDate }
                }
            });
        }

        //save text of text area on click
        if (Object.keys(textArea).length !== 0 && sidebarObject.has_textarea === true) {
            Object.keys(textArea).forEach(key => {
                let dd = textArea[key].id === sidebarObject.textarea.id
                if (dd === true) {
                    let newText = { ...sidebarObject.textarea, value: textArea[key].input }
                    sidebarObject = { ...sidebarObject, textarea: newText }
                }
            });
        }

        const index = tabFiltredJson && tabFiltredJson.findIndex(item => item.id === sidebarObject.id);
        if (index !== -1) {

            setTabFiltredJson(prev => prev.map((item, i) => i === index ? sidebarObject : item));


            //setSelectedTabFiltredJson(prev => prev.map((item, i) => i === index ? sidebarObject : item));
        } else {

            setTabFiltredJson(prev => [...prev, sidebarObject]);
        }
    }


    // selet the child type and make their json
    const handleSelectChildType = (child) => {
        setSelectedSideBar([])
        let tabData = stepsJsonData.map(item => item.tabs).flat()
        let types = tabData.map((item => item.types)).flat()
        let typeswithchild = types.find((item) => item.id === child.parent)
        if (typeswithchild) {
            let typesObject = { ...typeswithchild, childTypes: [child] };
            saveTypeDataToJson(typesObject)
            //  let filtredTab = tabData.find(item => item.id === typesObject.parent)

            // let sidebarObject = { ...filtredTab, types: [typesObject] }


            // //save input on click 
            // if (Object.keys(typeInput).length !== 0 && sidebarObject.has_input === true) {
            //     Object.keys(typeInput).forEach(key => {
            //         let dd = typeInput[key].id === sidebarObject?.input?.id
            //         if (dd === true) {
            //             let newInput = { ...sidebarObject.input, value: typeInput[key].input }
            //             sidebarObject = { ...sidebarObject, input: newInput }
            //         }
            //     });
            // }
            // //save date on click
            // if (Object.keys(date).length !== 0 && sidebarObject.has_date === true) {
            //     Object.keys(date).forEach(key => {
            //         let dd = date[key].id === sidebarObject.date.id
            //         if (dd === true) {
            //             let newDate = { ...sidebarObject.date, value: date[key].input }
            //             sidebarObject = { ...sidebarObject, date: newDate }
            //         }
            //     });
            // }

            // //save text of text area on click
            // if (Object.keys(textArea).length !== 0 && sidebarObject.has_textarea === true) {
            //     Object.keys(textArea).forEach(key => {
            //         let dd = textArea[key].id === sidebarObject.textarea.id
            //         if (dd === true) {
            //             let newText = { ...sidebarObject.textarea, value: textArea[key].input }
            //             sidebarObject = { ...sidebarObject, textarea: newText }

            //             // sidebarObject = { ...sidebarObject, text: textArea[key].input }
            //         }
            //     });
            // }


            // const index = tabFiltredJson && tabFiltredJson.findIndex(item => item.id === sidebarObject.id);
            // if (index !== -1) {
            //     stateForSave = tabFiltredJson.map((item, i) => i === index ? sidebarObject : item)
            //     setTabFiltredJson(prev => prev.map((item, i) => i === index ? sidebarObject : item));


            //     //setSelectedTabFiltredJson(prev => prev.map((item, i) => i === index ? sidebarObject : item));
            // } else {
            //     stateForSave = [...stateForSave, sidebarObject];
            //     setTabFiltredJson(prev => [...prev, sidebarObject]);
            // }
        }

        //set child types
        let [stepiID, sidebarId, typeId, childTypeId] = child.hierarchy_id.split('.');
        const updatedItems = [...childTypeDataJson];

        const childID = stepiID + '.' + sidebarId;
        const index = childTypeDataJson.findIndex(item => {
            let [stepiID, sidebarId, typeId, childTypeId] = item.hierarchy_id.split('.');
            const result = stepiID + '.' + sidebarId;
            return childID === result;
        });

        if (index !== -1) {
            // Create a new array with the updated item
            setChildTypeDataJson(prev => [
                ...prev.slice(0, index),
                child,
                ...prev.slice(index + 1)
            ]);
            setSelectedChildData(prev => [
                ...prev.slice(0, index),
                child,
                ...prev.slice(index + 1)
            ])
        } else {
            setChildTypeDataJson(prev => [...prev, child]);
            setSelectedChildData(prev => [...prev, child]);
        }

    }


    //get the input change in input box
    const handleInputChange = (id, event) => {
        const { value } = event.target;
        // Update the state with the new input value for the specific id
        setTypeInput(prevState => ({
            ...prevState,
            [id]: {
                id: id,
                input: value
            }
        }));
    };

    const handleTextAreaChange = (id, event) => {
        const { value } = event.target;

        setTextArea(prevState => ({
            ...prevState,
            [id]: {
                id: id,
                input: value
            }
        }));
    };


    const handleDateChange = (id, event) => {
        setDate((prevState) => ({
            ...prevState,
            [id]: {
                id: id,
                input: event.target.value.toString()
            }
        }));
    };

    // add input data into json if any change in the input field
    const handleInputData = () => {
        let currenttab = tabFiltredJson.find(item => item?.input?.id == tabElementType?.input?.id)

        if (currenttab?.input) {
            const matchedObject = Object.values(typeInput).find(item => item.id === currenttab.input.id);
            if (matchedObject) {
                let putINput = currenttab.input
                let dataInput = { ...putINput, value: matchedObject.input }
                let updatedwithinput = { ...currenttab, input: dataInput }
                const index = tabFiltredJson.findIndex(item => item.id === updatedwithinput.id);
                if (index !== -1) {
                    stateForSave = tabFiltredJson.map((item, i) => i === index ? updatedwithinput : item)
                    setTabFiltredJson(prev => prev.map((item, i) => i === index ? updatedwithinput : item));
                }
            }
        }
    }

    const handleTextAreaData = () => {

        let currenttab = tabFiltredJson.find(item => item?.textarea?.id == tabElementType?.textarea?.id)
        if (currenttab?.textarea) {
            const matchedObject = Object.values(textArea).find(item => item.id === currenttab.textarea.id);

            if (matchedObject) {
                let puttextArea = currenttab.textarea
                let datatextArea = { ...puttextArea, value: matchedObject.input }
                let updatedwithinput = { ...currenttab, textarea: datatextArea }

                const index = tabFiltredJson.findIndex(item => item.id === updatedwithinput.id);
                if (index !== -1) {
                    stateForSave = tabFiltredJson.map((item, i) => i === index ? updatedwithinput : item)
                    setTabFiltredJson(prev => prev.map((item, i) => i === index ? updatedwithinput : item));
                }
            }
        }
    }


    // add date data into json if any change in the date 
    const handleDateData = () => {
        let currenttab = tabFiltredJson.find(item => item?.date?.id === tabElementType?.date?.id)
        if (currenttab && currenttab.date !== undefined) {
            const matchedObject = Object.values(date).find(item => item.id === currenttab.date.id);

            if (matchedObject) {

                let putDate = currenttab.date
                let dataDate = { ...putDate, value: matchedObject.input }
                let updatedwithinput = { ...currenttab, date: dataDate }

                const index = tabFiltredJson.findIndex(item => item.id === updatedwithinput.id);
                if (index !== -1) {
                    stateForSave = tabFiltredJson.map((item, i) => i === index ? updatedwithinput : item)
                    setTabFiltredJson(prev => prev.map((item, i) => i === index ? updatedwithinput : item));
                }
            }
        }
    }


    // add text data into json if any change in the textarea field
    useEffect(() => {
        if (tabFiltredJson.length > 0) {
            handleTextAreaData()
        }

    }, [textArea, setTextArea])

    useEffect(() => {
        if (tabFiltredJson.length > 0) {
            handleInputData()
        }
    }, [typeInput, setTypeInput])

    useEffect(() => {
        if (tabFiltredJson.length > 0) {
            handleDateData()
        }
    }, [date, setDate])

    return (
        <div className='p-4 w-5/6 tab-right-content'>
            <div className='flex flex-col '>
                <div className='border-b border-gray-300'>
                    <div className=' font-bold'>
                        <label>{tabTitle} </label>
                    </div>
                    <div>
                        <label>{typeExtrainformation}</label>
                    </div>
                </div>

                <div className="top-filter-sec flex flex-wrap justify-start mb-4 mt-4  ">
                    {tabElementType && tabElementType.element_type === "dropdown" && (
                        <select value={selectedValue} onChange={handleSelectTypeChange}>
                            {tabElementType?.types?.map((element, index) => (
                                <option key={index} value={element.type} style={{ cursor: "pointer" }}>
                                    {element.type}
                                </option>
                            ))}
                        </select>
                    )}

                    {tabElementType && tabElementType.element_type === "image" &&
                        tabElementType?.types?.map((element, index) => <React.Fragment key={index}>
                            <div
                                onClick={() => handleSelectType(element)}
                                style={{ cursor: "pointer" }}
                            >
                                <img
                                    src={element.img}
                                    alt={element.alt || ""}
                                    className={`cursor-pointer mx-0.5 w-11 h-11 object-none hover:border-4 border-blue-400 rounded ${currentType == element.id && "border-4 border-blue-400 rounded"}  `}
                                    style={{ width: '50px', height: '50px' }}
                                    onMouseEnter={() => setHoverType(element.type)}
                                    onMouseLeave={() => setHoverType()}
                                // onClick={() => handleSelectType(element)}
                                />
                            </div>
                        </React.Fragment>)
                    }

                    {tabElementType && tabElementType.element_type === "radio" &&
                        tabElementType?.types?.map((element, index) => <React.Fragment key={index}>
                            <div className='filter-box ml-3'
                                onClick={() => handleSelectType(element)}
                                // onMouseEnter={() => setHoverType(element.type)}
                                // onMouseLeave={() => setHoverType()}
                                style={{ cursor: "pointer" }}
                            >
                                <input
                                    type="radio"
                                    checked={currentType === element.id}
                                    value={element.type}
                                />
                                {element.type}
                            </div>
                        </React.Fragment>)
                    }

                    {tabElementType && tabElementType.element_type === "checkbox" &&
                        tabElementType?.types?.map((element, index) => <React.Fragment key={index}>
                            <div className='filter-box ml-3'
                                style={{ cursor: "pointer" }}>
                                <label style={{ cursor: "pointer" }}>
                                    <input
                                        // onMouseEnter={() => setHoverType(element.type)}
                                        // onMouseLeave={() => setHoverType()}
                                        // defaultChecked={element?.options}
                                        type="checkbox"
                                        checked={checkBoxType && checkBoxType.find(e => e == element.id)}
                                        onChange={() => handleSelectTypeCheckBox(element)}
                                    />
                                    {element.type}
                                </label>
                            </div>
                        </React.Fragment>)
                    }


                    {tabElementType && tabElementType.element_type === "label" &&
                        tabElementType?.types?.map((element, index) => <React.Fragment key={index}>
                            <div
                                style={{ cursor: "pointer" }}
                                className={`m-3 p-1 ${currentType === element.id && 'border-2 border-black rounded'}`}>
                                <label onClick={() => handleSelectType(element)}
                                    onMouseEnter={() => setHoverType(element.type)}
                                    onMouseLeave={() => setHoverType()}
                                    style={{ cursor: "pointer" }}
                                >

                                    {element.type}
                                </label>
                            </div>
                        </React.Fragment>)
                    }
                </div>

            </div>

            {childTypeData && childTypeData.length > 0 &&
                <div className='border-t border-gray-300'>
                    {hoverType && <div className={styles.tooltip}
                        style={{ left: position.x + 10, top: position.y + 10 }}>
                        {hoverType}
                    </div>}

                    {hoverChildType && <div className={styles.tooltip}
                        style={{ left: position.x + 10, top: position.y + 10 }}>
                        {hoverChildType}
                    </div>}
                </div>
            }
            <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <div className='font-bold'>
                        <label>{childLabel} </label>
                    </div>
                    <div>
                        <label>{childTypeExtraInfo}</label>
                    </div>
                </div>

                {childTypeData && childTypeData.length > 0 &&
                    <div className={`${styles.main_div} mt-1 mb-2  border-t border-gray-300`}>
                        {childTypeData && childTypeData?.map((child, index) => (
                            <img
                                key={index}
                                src={child.img}
                                alt={"image"}
                                className={`cursor-pointer mx-0.5 w-11 h-11 object-none hover:border-4 border-blue-400 rounded ${selectedChildData.find(item => item.id === child.id) && "border-4 border-blue-400 rounded"}`}
                                style={{ width: '50px', height: '50px' }}
                                onClick={() => handleSelectChildType(child)}
                                onMouseEnter={() => setHoverChildType(child.label)}
                                onMouseLeave={() => setHoverChildType()}
                            />
                        ))}
                    </div>
                }
                <div className='flex flex-col mb-2 mt-2'  >
                    {tabElementType && tabElementType.has_input === true && <div>
                        <div className='flex flex-col  '>
                            <label>{tabElementType.input.label}</label>
                            <input
                                className='max-w-max'
                                type="text"
                                // maxLength={10}  // Limit the input to 10 characters
                                placeholder={tabElementType.input?.placeholder}
                                value={typeInput[tabElementType.input.id]?.input || ''}
                                onChange={(event) => handleInputChange(tabElementType.input.id, event)}

                            />
                        </div>
                    </div>}

                    {tabElementType && tabElementType?.has_textarea === true && <div>
                        <div className='flex flex-col border-t border-gray-300 mt-2'>
                            <label htmlFor="myTextArea">{tabElementType.textarea.label}</label>
                            <textarea
                                maxLength={50} //This textarea limits user input to a maximum of 10 characters
                                id="myTextArea"
                                className='border border-gray-300 max-w-max'
                                value={textArea[tabElementType.textarea.id]?.input || ''}
                                onChange={(event) => handleTextAreaChange(tabElementType.textarea.id, event)}
                                rows="3" // Set the number of rows
                                cols="20" // Set the number of columns
                            />
                        </div>
                    </div>}

                    {tabElementType?.has_date && (
                        <div className='border-t border-gray-300 mt-2'>
                            <div className='flex flex-col '>
                                <label htmlFor={`date-input-Enter Da${tabElementType.date.id}`}>{tabElementType.date.label}</label>
                                <input
                                    id={`date-input-${tabElementType.date.id}`}
                                    className='max-w-max'
                                    type="date"
                                    value={date[tabElementType.date.id]?.input || ''}
                                    onChange={(event) => handleDateChange(tabElementType.date.id, event)}
                                    aria-label="Enter date"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default ChildData
