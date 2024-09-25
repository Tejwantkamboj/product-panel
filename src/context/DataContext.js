// context/DataContext.js
"use client"
import React, { createContext, useState, useContext } from 'react';
import { stepsJsonData } from '../../public/data/tabsData';
export const DataContext = createContext();

export const DataProvider = ({ children }) => {


    // intial stage pre selected data for user view
    const [sidebarList, setSidebarList] = useState(stepsJsonData[0]?.tabs)
    const [typeData, setTypeData] = useState(stepsJsonData[0]?.tabs[0]?.types)
    const [childTypeData, setChildTypeData] = useState(stepsJsonData[0]?.tabs[0]?.types[0].has_child === true ? stepsJsonData[0]?.tabs[0]?.types[0]?.childTypes : [])
    const [currentType, setCurrentType] = useState(stepsJsonData[0]?.tabs[0]?.types[0]?.id)
    const [tabTitle, setTabLabel] = useState(stepsJsonData[0]?.tabs[0]?.title)


    const [tabElementType, setTabElementType] = useState(stepsJsonData[0]?.tabs[0])

    //json data
    const [childTypeDataJson, setChildTypeDataJson] = useState([])
    const [selectedChildData, setSelectedChildData] = useState([])

    const [selectedSidebarData, setSelectedSidebarData] = useState(stepsJsonData[0]?.tabs[0]?.id)

    //next click side tab filtred data
    const [tabFiltredJson, setTabFiltredJson] = useState([])

    //side bar required type
    const [selectedTabFiltredJson, setSelectedTabFiltredJson] = useState([])
    const [selectedSideBar, setSelectedSideBar] = useState([])
    //input fields 
    const [typeInput, setTypeInput] = useState([])
    //date fields
    const [date, setDate] = useState([])
    //text area fields
    const [textArea, setTextArea] = useState([])

    //type extra information
    const [typeExtrainformation, setTypeExtraInformation] = useState(stepsJsonData[0]?.tabs[0]?.extra_information)

    //child label
    const [childLabel, setChildLabel] = useState(stepsJsonData[0]?.tabs[0]?.types[0].has_child == true && stepsJsonData[0]?.tabs[0]?.types[0]?.title)

    //childtype extra information
    const [childTypeExtraInfo, setChildTypeExtraInfo] = useState(stepsJsonData[0]?.tabs[0]?.types[0].has_child == true && stepsJsonData[0]?.tabs[0]?.types[0]?.extra_information)

    //checkbox type data
    const [checkBoxType, setCheckBoxType] = useState([])
    const [selectedValue, setSelectedValue] = useState('');

    return (
        <DataContext.Provider value={{
            sidebarList, setSidebarList, typeData, setTypeData, childTypeData, setChildTypeData,
            childTypeDataJson, setChildTypeDataJson, selectedChildData, setSelectedChildData,
            tabFiltredJson, setTabFiltredJson, selectedSidebarData, setSelectedSidebarData,
            selectedTabFiltredJson, setSelectedTabFiltredJson, selectedSideBar, setSelectedSideBar,
            currentType, setCurrentType, tabTitle, setTabLabel, tabElementType, setTabElementType,
            typeInput, setTypeInput, date, setDate, textArea, setTextArea,
            typeExtrainformation, setTypeExtraInformation, childLabel, setChildLabel, childTypeExtraInfo, setChildTypeExtraInfo,
            checkBoxType, setCheckBoxType,selectedValue, setSelectedValue


        }}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    return useContext(DataContext);
};
