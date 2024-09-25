'use client'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import React, { useEffect, useRef, useState } from "react";
import { Button } from 'primereact/button';
import { stepsJsonData } from "../../public/data/tabsData";
import { useDataContext } from "@/context/DataContext";
import ChildData from "./ChildData";
import Swal from 'sweetalert2';
import csvParser from 'csv-parser';


const Main = () => {
    const sidebarOptions = 'px-2 py-4 w-full  border-b border-gray-300 cursor-pointer  hover:bg-black hover:text-white'
    const ptagsidebar = 'text-xs font-semibold '

    //local states for saving data only accesable in this component
    const [consoleData, setConsoleData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fileName, setFileName] = useState('');

    //states that used to save data importing from DataContext where all the state defiened using use-context hook
    const { sidebarList, setSidebarList, setTypeData, setChildTypeData, setSelectedChildData,
        tabFiltredJson, setTabFiltredJson, childTypeDataJson, currentType, setCurrentType,
        selectedSidebarData, setSelectedSidebarData, setChildTypeDataJson, textArea, setTextArea,
        selectedTabFiltredJson, setSelectedTabFiltredJson, childTypeExtraInfo, setChildTypeExtraInfo,
        selectedSideBar, setSelectedSideBar, tabTitle, setTabLabel, childLabel, setChildLabel,
        tabElementType, setTabElementType, setTypeInput, date, setDate, typeExtrainformation,
        setTypeExtraInformation, setCheckBoxType, checkBoxType, selectedValue, setSelectedValue
    } = useDataContext()

    useEffect(() => {
        if (tabElementType.element_type === "checkbox" && checkBoxType.length === 0) {
            if (tabElementType?.types[0]?.has_child == true) {
                let id = tabElementType.types[0].id
                setCheckBoxType((prevCheckBoxType) => { return [id] });
            } else {
                setCheckBoxType([])
            }

        }
    }, [])

    // handle tab click and show types of selected tab and its childtype
    const handleSideBarClick = (tab) => {


        setTabElementType(tab)
        setTabLabel(tab.title)
        setTypeExtraInformation(tab?.extra_information)
        setSelectedSidebarData(tab.id);
        setTypeData(tab.types);
        setCurrentType(tab.types[0].id)
        setSelectedSideBar([])


        if (tabFiltredJson && tabFiltredJson.length > 0) {
            let typeData = tabFiltredJson && tabFiltredJson.flatMap(item => item.types)
            let typdeID = new Set(typeData.map(item => item.id))
            let parentType = tab.types.find(item => typdeID.has(item.id));

            if (parentType) {

                setCurrentType(parentType.id)
                if (tab.element_type === "checkbox") {
                    setCheckBoxType((prevCheckBoxType) => { return [parentType.id] });
                }
                if (tab.element_type === "dropdown") {
                   
                    setSelectedValue(parentType.type)
                }
                if (parentType?.has_child === true) {
                    setChildTypeData(parentType.childTypes);
                    setChildLabel(parentType.title)
                    setChildTypeExtraInfo(parentType.extra_information)
                } else {

                    setChildTypeData([])
                }
            } else {
                setCurrentType(tab.types[0].id)
                if (tab.types[0].has_child === true) {
                    setChildLabel(tab.types[0].title)
                    setChildTypeExtraInfo(tab.types[0].extra_information)
                    setChildTypeData(tab.types[0].childTypes);
                } else {
                    setChildLabel()
                    setChildTypeExtraInfo()
                    setChildTypeData([]);
                }

                if (tab.element_type === "checkbox") {
                    let id = tab.types[0].id
                    setCheckBoxType((prevCheckBoxType) => { return [id] });
                }
            }

        } else {
            if (tab.types[0]?.has_child === true) {
                setChildLabel(tab.types[0].title)
                setChildTypeData(tab.types[0].childTypes);
                setChildTypeExtraInfo(tab.types[0].extra_information)
            } else {
                setChildLabel()
                setChildTypeData([]);
                setChildTypeExtraInfo()
            }

            if (tab.element_type === "checkbox") {
                let id = tab.types[0].id
                setCheckBoxType((prevCheckBoxType) => { return [...prevCheckBoxType, id] });
            }
        }


    };


    // handle the change in step on-clicking next button
    const handleStepsClick = (element) => {

        setTabLabel(element.tabs[0].title)
        setTabElementType(element.tabs[0])
        setSidebarList(element.tabs)
        setSelectedSidebarData(element.tabs[0].id)
        setTypeData(element.tabs[0].types)
        setTypeExtraInformation(element.tabs[0].extra_information)
        setCurrentType(element.tabs[0].types[0].id)

        //   if (tabFiltredJson && tabFiltredJson.length > 0) {
        //     let typeData = tabFiltredJson && tabFiltredJson.flatMap(item => item.types)
        //     let typdeID = new Set(typeData.map(item => item.id))
        //     let parentType = tab.types.find(item => typdeID.has(item.id));

        if (tabFiltredJson && tabFiltredJson.length > 0) {
            let typeData = tabFiltredJson && tabFiltredJson.flatMap(item => item.types)
            let typdeID = new Set(typeData.map(item => item.id))

            let typeId = new Set(childTypeDataJson.map(item => item.parent))
            let parentType = element.tabs[0].types.find(item => typeId.has(item.id));
            if (parentType) {

                setChildLabel(parentType.title)
                setChildTypeData(parentType.childTypes);
                setChildTypeExtraInfo(parentType.extra_information)

            } else {
                setChildLabel(element.tabs[0].types[0].title)
                setChildTypeData(element.tabs[0].types[0].childTypes)
                setChildTypeExtraInfo(element.tabs[0].types[0].extra_information)

            }
        } else {
            setChildLabel(element.tabs[0].types[0].title)
            setChildTypeExtraInfo(element.tabs[0].types[0].extra_information)
            setChildTypeData(element.tabs[0].types[0].childTypes)
        }
    }

    const currentDate = new Date();
    const year = currentDate.getFullYear(); // 2024
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // August is 07 (month is 0-indexed)
    const day = String(currentDate.getDate()).padStart(2, '0'); // 14
    const formattedDate = `${day}-${month}-${year}`;

    //making final json file 
    const makeJson = () => {
        // Create an object to hold grouped data
        const groupedData = tabFiltredJson.reduce((acc, item) => {
            // Extract parent key (CH1, CH2, CH3, etc.) from hierarchy_id
            const parentKey = item.parent

            // Initialize the array for the parent key if it doesn't exist
            if (!acc[parentKey]) {
                acc[parentKey] = [];
            }

            // Push the item to the appropriate parent group
            acc[parentKey].push(item);

            return acc;
        }, {});

        // Transform the grouped data into the desired format
        let objectedData = Object.keys(groupedData).map(parentKey => ({
            parent: parentKey,
            tabs: groupedData[parentKey]
        }));

        let finalObject = objectedData.map((data) => {
            let creteFinalObject = stepsJsonData.find(item => item.id == data.parent);
            if (creteFinalObject) {
                return { ...creteFinalObject, tabs: data.tabs, created_date: formattedDate };
            }
            return null;
        });
        setConsoleData(finalObject)
    }

    //handle operation on clicking on next button and show next step data
    const handleNext = () => {

        let filteredTabRequire = stepsJsonData[currentIndex].tabs
            .filter((item) => item.required === true)
            .map((item) => ({ id: item.id, itemname: item.label }));
        const missingElements = filteredTabRequire.filter(item => {
            return !tabFiltredJson?.some(element => element?.id === item?.id);
        }).map(id => {
            return id;
        });
        setSelectedSideBar(missingElements)

        let data = missingElements?.map(item => item?.itemname)

        if (missingElements.length > 0) {
            Swal.fire({
                title: 'Select Data From required fields',
                text: data.join(', '),
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#000000',
            });
            return false
        }


        if (currentIndex < stepsJsonData.length) {
            setSelectedTabFiltredJson([])
            const filteredElements = stepsJsonData.find((_, index) => index === currentIndex + 1);
            setCurrentIndex(currentIndex + 1);
            if (currentIndex < stepsJsonData.length - 1) {
                handleStepsClick(filteredElements)
            }

        }


        if (currentIndex === stepsJsonData.length - 1) {
            makeJson()
        }
    };


    useEffect(() => {
        if (currentIndex === stepsJsonData.length - 1) {
            makeJson()
        }
    }, [tabFiltredJson, childTypeDataJson])

    //handle operation on clicking on back button and show previous step data with pre-selected previous selected data
    const handleBack = () => {
        if (currentIndex > 0) {
            const filteredElements = stepsJsonData.find((_, index) => index == currentIndex - 1);
            setCurrentIndex(currentIndex - 1)

            handleStepsClick(filteredElements);
            if (tabFiltredJson.length > 0) {
                let selectedTabDAta = tabFiltredJson.filter((item) => item.parent === filteredElements.id)
                setSelectedTabFiltredJson(selectedTabDAta)
            }
        }
    };

    //after saving the data make all vaible in their intial state
    const handleIntialState = () => {
        setSidebarList(stepsJsonData[0].tabs)
        setTypeData(stepsJsonData[0].tabs[0].types)
        setChildTypeData(stepsJsonData[0].tabs[0].types[0].childTypes)
        setTabLabel(stepsJsonData[0].tabs[0].title)
        setChildTypeDataJson([])
        setSelectedChildData([])
        setSelectedSidebarData(stepsJsonData[0].tabs[0].id)
        setTabFiltredJson([])
        setCurrentIndex(0)
        setConsoleData([])
        setFileName('')
        setCurrentType(stepsJsonData[0].tabs[0].types[0].id)
        setTabLabel(stepsJsonData[0].tabs[0].title)
        setTabElementType(stepsJsonData[0].tabs[0])
        setTypeInput([])
        setDate([])
        setTextArea([])
        setTypeExtraInformation(stepsJsonData[0].tabs[0].extra_information)
        setChildLabel(stepsJsonData[0].tabs[0].types[0].title)
        setChildTypeExtraInfo(stepsJsonData[0].tabs[0].types[0].extra_information)
    }

    //save json file into data base
    const handleSave = async () => {
        let filteredTabRequire = stepsJsonData[currentIndex].tabs
            .filter((item) => item.required === true)
            .map((item) => ({ id: item.id, itemname: item.label }));

        const missingElements = filteredTabRequire.filter(item => {
            return !tabFiltredJson.some(element => element.id === item.id);
        }).map(id => {
            return id;
        });

        setSelectedSideBar(missingElements)
        let data = missingElements.map(item => item.itemname)
        console.log("saved function pending data", data)
        if (missingElements.length > 0) {
            Swal.fire({
                title: 'Select required fields',
                text: data.join(', '),
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#000000',
            });
            return false
        }
        try {
            if (consoleData.length > 0) {
                const response = await fetch('/api/saveData', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(consoleData),
                });

                if (response.ok) {
                    const result = await response.json();
                    setFileName(result.fileName);
                    console.log("File Saved WiTH NAME :::", result.fileName)
                    handleIntialState()
                    Swal.fire({
                        title: "Data Saved Successfully",
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#000000',
                        timer: 2000,  // Automatically close after 2 seconds
                        timerProgressBar: true // Optional: Show a progress bar for the timer
                    });
                } else {
                    Swal.fire({
                        title: "Error in Saving Data",
                        //text:  "Error in Saving Data",
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#000000',
                    });
                }
            }
        } catch (error) {
            console.error("error in creating file", error)
        }

    }

    return (
        <>
            <div className="card flex justify-content-center bg-slate-100">
                <div className={`p-stepper p-component p-stepper-horizontal multystep-component m-auto mt-10 overflow-hidden border border-slate-300 rounded-md p-3`} style={{ flexBasis: '60rem' }}>
                    <div className="flex flex-col align-middle">
                        <div className=" mb-2 relative size-full">
                            {/* steps data */}
                            <ul className="flex  p-stepper-nav" style={{ overflowX: 'scroll' }} >

                                {stepsJsonData.length > 0 && stepsJsonData?.map((element, index) => (
                                    <li
                                        className={`${index === currentIndex ? 'bg-black-important' : 'initial'}`}
                                        key={index}
                                    // onClick={() => handleStepsClick(element.tabs)}
                                    >
                                        {element.label}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* steps side bar */}
                        <div className=" flex flex-row">
                            <div className="left-link-list flex flex-col items-center w-1/6 tab-left h-full bg-slate-100 border-[1px] border-gray-300">


                                {sidebarList && sidebarList?.map((tab, index) => (

                                    <div
                                        className={`${sidebarOptions}  ${selectedSidebarData == tab.id && ' bg-blue-500-important'} `}
                                        onClick={() => handleSideBarClick(tab)}
                                        style={{ border: selectedSideBar.find(item => item.id === tab.id) && '1px solid red' }}
                                        key={index}>
                                        <p className={`${ptagsidebar}`}>{tab?.label}</p>
                                    </div>

                                ))}
                            </div>
                            <ChildData />

                        </div>
                        {/* */}


                    </div>
                    <div className="mt-4 flex p-4 justify-end  border-t-[1px] border-slate-300">

                        {currentIndex > 0 && <Button className=" back-button border-2 mr-2 border-gray-700 w-auto py-2 px-7  size-auto text-sm" label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={handleBack} />}
                        {currentIndex < stepsJsonData.length - 1 && <Button className="next-button  border-2 border-sky-300 w-auto py-2 px-7 pr-3 size-auto text-sm" label="Next" icon="pi pi-arrow-right" iconPos="right" style={{ color: 'white' }} onClick={handleNext} />}
                        {currentIndex === stepsJsonData.length - 1 && <Button className="next-button  border-2 border-sky-300 w-auto py-2 px-7 pr-3 size-auto text-sm" label="Save" icon="pi pi-arrow-right" iconPos="right" style={{ color: 'white' }} onClick={handleSave} />}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Main
