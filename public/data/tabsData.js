
export const stepsJsonData = [
    {
        id: "CH1",
        hierarchy_id: 'CH1',
        label: 'Character 1',
        description: 'This is for Character 1',
        tabs: [
            {
                id: 'skin_typeCH1',
                required: true,
                has_input: true,
                has_date: true,
                has_textarea: true,

                input: {
                    id: "input_skin_typeCH1",
                    placeholder: "Enter Skin Type",
                    label: 'Skin Type',
                    value: ""
                },

                date: {
                    id: "date_skin_typeCH1",
                    label: 'Birth Date',
                    value: ''
                },
                textarea: {
                    id: "text_skin_typeCH1",
                    placeholder: "Add Text Here ",
                    label: 'Hobby Description',
                    value: ""
                },

                title: "Skin Type",
                extra_information: "These are the diffrent types of skin",
                label: 'Skin Tone CH1',
                parent: 'CH1',
                element_type: "checkbox",
                types: [
                    {

                        id: 'skin_typeCH11',
                        type: 'RASHY',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH1.skin_type.skin_type1',
                        img: "../images/images (3).jpeg",
                        parent: 'skin_typeCH1',
                        has_child: true,
                        title: "child skin1",
                        extra_information: "These are the diffrent child types of skin",
                        childTypes: [
                            { id: 'CH1ST1', parent: "skin_typeCH11", hierarchy_id: 'CH1.skin_typeCH1.skin_typeCH11.CH1ST1', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'CH1ST2', parent: "skin_typeCH11", hierarchy_id: 'CH1.skin_typeCH1.skin_typeCH11.CH1ST2', label: 'Long', img: '../images/images (3).jpeg', },
                            { id: 'CH1ST3', parent: "skin_typeCH11", hierarchy_id: 'CH1.skin_typeCH1.skin_typeCH11.CH1ST3', label: 'Curly', img: '../images/dress3.jpeg', }
                        ]
                    },

                    {
                        id: 'skin_typeCH12',
                        type: 'Oily',
                        title: "child skin2",
                        input: '',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH2.skin_color.skin_type2',
                        img: '../images/images (3).jpeg',
                        parent: 'skin_typeCH1',
                        extra_information: "These are the diffrent child types of skin type 2",
                        has_child: true,

                        childTypes: [
                            { id: 'CH1ST21', parent: "skin_typeCH12", hierarchy_id: 'CH1.skin_typeCH1.skin_typeCH12.CH1ST21', label: 'Bun', img: '../images/dress5.jpeg', },
                            { id: 'CH1ST22', parent: "skin_typeCH12", hierarchy_id: 'CH1.skin_typeCH1.skin_typeCH12.CH1ST22', label: 'Long', img: '../images/dress4.jpeg', },
                            { id: 'CH1ST23', parent: "skin_typeCH12", hierarchy_id: 'CH1.skin_typeCH1.skin_typeCH12.CH1ST23', label: 'Curly', img: '../images/download (1).jpeg', },
                            { id: 'CH1ST24', parent: "skin_typeCH12", hierarchy_id: 'CH1.skin_typeCH1.skin_typeCH12.CH1ST24', label: 'Bun', img: '../images/download (1).jpeg', },
                            { id: 'CH1ST25', parent: "skin_typeCH12", hierarchy_id: 'CH1.skin_typeCH1.skin_typeCH12.CH1ST25', label: 'Long', img: '../images/dress3.jpeg', },
                            { id: 'CH1ST26', parent: "skin_typeCH12", hierarchy_id: 'CH1.skin_typeCH1.skin_typeCH12.CH1ST26', label: 'Curly', img: '../images/dress.jpeg', }
                        ]
                    },

                ]

            },

            {
                id: 'hair_typeCH1',
                required: true,
                has_input: false,
                has_textarea: true,
                has_date: true,
                date: {
                    id: "date_hair_typeCH1",
                    label: 'Anniversary  Date',
                    value: ''
                },
                textarea: {
                    id: "text_hair_typeCH1",
                    placeholder: "Enter About Hair Type Here",
                    label: 'Hair Description',
                    value: ""
                },

                label: 'Hairs CH1',
                title: "Hair Type",
                extra_information: "These are the diffrent types of Hair",
                parent: "CH1",
                element_type: "dropdown",
                types: [
                    {
                        id: 'hair_typeCH11',
                        type: 'hair',
                        element_type: "select",
                        required: true,
                        hierarchy_id: 'CH1.hair_type.hair_type1',
                        img: "../images/images (3).jpeg",
                        parent: 'hair_typeCH1',
                        has_child: true,
                        title: "hair skin1",
                        extra_information: "These are the diffrent child types of hairs",
                        childTypes: [
                            { id: 'CH1HT1', parent: 'hair_typeCH11', hierarchy_id: 'CH1.hair_typeCH1.hair_typeCH11.CH1HT1', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'CH1HT2', parent: 'hair_typeCH11', hierarchy_id: 'CH1.hair_typeCH1.hair_typeCH11.CH1HT2', label: 'Long', img: '../images/images (3).jpeg', },
                            { id: 'CH1HT3', parent: 'hair_typeCH11', hierarchy_id: 'CH1.hair_typeCH1.hair_typeCH11.CH1HT3', label: 'Curly', img: '../images/images (3).jpeg', }
                        ]
                    },

                    {
                        id: 'hair_typeCH12',
                        type: 'Swatches',
                        element_type: "checkbox",
                        required: true,
                        hierarchy_id: 'CH2.hair_color',
                        img: '../images/images (3).jpeg',
                        parent: 'hair_typeCH1',
                        has_child: true,
                        title: "child curly hairs",
                        extra_information: "These are the diffrent child types of curly hairs",
                        childTypes: [
                            { id: 'CH1HC21', parent: 'hair_typeCH12', hierarchy_id: 'CH1.hair_typeCH1.hair_typeCH12.CH1HC21', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'CH1HC22', parent: 'hair_typeCH12', hierarchy_id: 'CH1.hair_typeCH1.hair_typeCH12.CH1HC22', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'CH1HC23', parent: 'hair_typeCH12', hierarchy_id: 'CH1.hair_typeCH1.hair_typeCH12.CH1HC23', label: 'Curly', img: '../images/download (1).jpeg', },
                            { id: 'CH1HT24', parent: 'hair_typeCH12', hierarchy_id: 'CH1.hair_typeCH1.hair_typeCH12.CH1HC24', label: 'Bun', img: '../images/download (1).jpeg', },
                            { id: 'CH1HT25', parent: 'hair_typeCH12', hierarchy_id: 'CH1.hair_typeCH1.hair_typeCH12.CH1HC25', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'CH1HT26', parent: 'hair_typeCH12', hierarchy_id: 'CH1.hair_typeCH1.hair_typeCH12.CH1HC26', label: 'Curly', img: '../images/download (1).jpeg', }
                        ]
                    },
                ]
            },

            {
                id: 'dress_typeCH1',
                required: false,
                has_input: true,
                has_textarea: true,
                has_date: false,
                input: {
                    id: "input_dress_typeCH1",
                    placeholder: "Enter Dress Color Here",
                    label: 'Dress Color',
                    value: ""
                },
                textarea: {
                    id: "text_dress_typeCH1",
                    placeholder: "Add Description Here",
                    label: 'Dress Description',
                    value: ""
                },

                label: 'Dress CH1',
                title: "Dress Type",
                parent: "CH1",
                element_type: "radio",
                extra_information: "Theae are diffrent type of dresses",
                types: [
                    {
                        id: 'dress_typeCH11',
                        type: 'fabric',
                        element_type: "radio",
                        required: true,
                        hierarchy_id: 'CH1.dress.dress_type1',
                        img: "../images/dress.jpeg",
                        parent: 'dress_typeCH1',
                        has_child: true,
                        title: "child dress",
                        extra_information: "These are the diffrent child types of dress",
                        childTypes: [
                            { id: 'CH1DT1', parent: 'dress_typeCH11', hierarchy_id: 'CH1.dress_typeCH1.dress_typeCH11.CH1DT1', label: 'Bun', img: '../images/dress3.jpeg', },
                            { id: 'CH1DT2', parent: 'dress_typeCH11', hierarchy_id: 'CH1.dress_typeCH1.dress_typeCH11.CH1DT2', label: 'Long', img: '../images/images (3).jpeg', },
                            { id: 'CH1DT3', parent: 'dress_typeCH11', hierarchy_id: 'CH1.dress_typeCH1.dress_typeCH11.CH1DT3', label: 'Curly', img: '../images/images (3).jpeg', }
                        ]
                    },

                    {
                        id: 'dress_typeCH12',
                        type: 'cotton',
                        element_type: "dropdown",
                        required: true,
                        hierarchy_id: 'CH1.dress.dress_type2',
                        img: '../images/images (3).jpeg',
                        parent: 'dress_typeCH1',
                        has_child: true,
                        title: "child dress 2",
                        extra_information: "These are the second child types of dress",
                        childTypes: [
                            { id: 'CH1DT21', parent: 'dress_typeCH12', hierarchy_id: 'CH1.dress_typeCH1.dress_typeCH12.CH1DT21', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'CH1DT22', parent: 'dress_typeCH12', hierarchy_id: 'CH1.dress_typeCH1.dress_typeCH12.CH1DT22', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'CH1DT23', parent: 'dress_typeCH12', hierarchy_id: 'CH1.dress_typeCH1.dress_typeCH12.CH1DT23', label: 'Curly', img: '../images/download (1).jpeg', },
                            { id: 'CH1DT24', parent: 'dress_typeCH12', hierarchy_id: 'CH1.dress_typeCH1.dress_typeCH12.CH1DT24', label: 'Bun', img: '../images/download (1).jpeg', },
                            { id: 'CH1DT25', parent: 'dress_typeCH12', hierarchy_id: 'CH1.dress_typeCH1.dress_typeCH12.CH1DT25', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'CH1DT26', parent: 'dress_typeCH12', hierarchy_id: 'CH1.dress_typeCH1.dress_typeCH12.CH1DT26', label: 'Curly', img: '../images/download (1).jpeg', }
                        ]
                    },
                ]
            },

            {
                id: 'name_typeCH1',
                required: false,
                has_input: false,
                has_textarea: true,
                has_date: true,
                date: {
                    id: "date_name_typeCH1",
                    label: 'Date',
                    value: ''
                },
                textarea: {
                    id: "text_name_typeCH1",
                    placeholder: "Add Text Here ",
                    label: 'Hobby Description',
                    value: ""
                },

                extra_information: "These are the diffrent types of names",
                label: 'Name CH1',
                title: "Name Type",
                parent: "CH1",
                element_type: "radio",
                types: [
                    {
                        id: 'name_typeCH11',
                        type: 'alphabet',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH1.name_type.name_type1',
                        img: "../images/images (3).jpeg",
                        parent: 'name_typeCH1',
                        has_child: true,
                        title: "child name ",
                        extra_information: "These are the child types of name",
                        childTypes: [
                            { id: 'CH1NT1', parent: "name_typeCH11", hierarchy_id: 'CH1.name_typeCH1.name_typeCH11.CH1NT1', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'CH1NT2', parent: "name_typeCH11", hierarchy_id: 'CH1.name_typeCH1.name_typeCH11.CH1NT2', label: 'Long', img: '../images/images (3).jpeg', },
                            { id: 'CH1NT3', parent: "name_typeCH11", hierarchy_id: 'CH1.name_typeCH1.name_typeCH11.CH1NT3', label: 'Curly', img: '../images/images (3).jpeg', }
                        ]
                    },

                    {
                        id: 'name_typeCH12',
                        type: 'cotton',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH2.name_color',
                        img: '../images/images (3).jpeg',
                        parent: 'name_typeCH1',
                        has_child: true,
                        title: "child name2",
                        extra_information: "These are the second child types of name",
                        childTypes: [
                            { id: 'CH1NT21', parent: "name_typeCH12", hierarchy_id: 'CH1.name_typeCH1.name_typeCH12.CH1NT21', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'CH1NT22', parent: "name_typeCH12", hierarchy_id: 'CH1.name_typeCH1.name_typeCH12.CH1NT22', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'CH1NT23', parent: "name_typeCH12", hierarchy_id: 'CH1.name_typeCH1.name_typeCH12.CH1NT23', label: 'Curly', img: '../images/download (1).jpeg', },
                            { id: 'CH1NT24', parent: "name_typeCH12", hierarchy_id: 'CH1.name_typeCH1.name_typeCH12.CH1NT24', label: 'Bun', img: '../images/download (1).jpeg', },
                            { id: 'CH1NT25', parent: "name_typeCH12", hierarchy_id: 'CH1.name_typeCH1.name_typeCH12.CH1NT25', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'CH1NT26', parent: "name_typeCH12", hierarchy_id: 'CH1.name_typeCH1.name_typeCH12.CH1NT26', label: 'Curly', img: '../images/download (1).jpeg', }
                        ]
                    },
                ]
            },

            {
                id: 'accessoriesCH1',
                required: false,
                has_input: false,
                has_date: false,
                has_textarea: true,
                textarea: {
                    id: "text_accessories_typeCH1",
                    placeholder: "Add Text Here ",
                    label: 'Accessories Description',
                    value: ""
                },
                extra_information: "These are the diffrent types of accessories",
                label: 'Accessories CH1',
                title: "Accessories Type",
                parent: "CH1",
                element_type: "image",
                types: [
                    {
                        id: 'accessories_typeCH11',
                        type: 'accessories',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH1.accessories.accessories_type1',
                        img: "../images/accessories.jpeg",
                        parent: 'accessoriesCH1',
                        has_child: false,
                        child: 'accessories_types',
                        title: "child accessories ",
                        extra_information: "These are the child types of accessories",
                        childTypes: [
                            { id: 'CH1AT1', parent: "accessories_typeCH11", hierarchy_id: 'CH1.accessoriesCH1.accessories_typeCH11.CH1AT1', label: 'Band', img: '../images/images (3).jpeg', },
                            { id: 'CH1AT2', parent: "accessories_typeCH11", hierarchy_id: 'CH1.accessoriesCH1.accessories_typeCH11.CH1AT2', label: 'Belt', img: '../images/images (3).jpeg', },
                            { id: 'CH1AT3', parent: "accessories_typeCH11", hierarchy_id: 'CH1.accessoriesCH1.accessories_typeCH11.CH1AT3', label: 'Sandel', img: '../images/images (3).jpeg', }
                        ]
                    },

                    {
                        id: 'accessories_typeCH12',
                        type: 'accessories',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH1.accessories.accessories_type2',
                        img: '../images/accessories2.jpeg',
                        parent: 'accessoriesCH1',
                        has_child: false,
                        title: "child accessories 2",
                        extra_information: "These are the second child types of accessories",
                        childTypes: [
                            { id: 'CH1AC21', parent: "accessories_typeCH12", hierarchy_id: 'CH1.accessoriesCH1.accessories_typeCH12.CH1AT21', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'CH1AC22', parent: "accessories_typeCH12", hierarchy_id: 'CH1.accessoriesCH1.accessories_typeCH12.CH1AT22', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'CH1AC23', parent: "accessories_typeCH12", hierarchy_id: 'CH1.accessoriesCH1.accessories_typeCH12.CH1AT23', label: 'Curly', img: '../images/download (1).jpeg', },
                            { id: 'CH1AT24', parent: "accessories_typeCH12", hierarchy_id: 'CH1.accessoriesCH1.accessories_typeCH12.CH1AT24', label: 'Bun', img: '../images/download (1).jpeg', },
                            { id: 'CH1AT25', parent: "accessories_typeCH12", hierarchy_id: 'CH1.accessoriesCH1.accessories_typeCH12.CH1AT25', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'CH1AT26', parent: "accessories_typeCH12", hierarchy_id: 'CH1.accessoriesCH1.accessories_typeCH12.CH1AT26', label: 'Curly', img: '../images/download (1).jpeg', }
                        ]
                    },
                ]
            }
        ]

    },

    {
        id: "CH2",
        hierarchy_id: 'CH2',
        label: 'Character 2',
        description: 'This is for Character 2',

        tabs: [
            {
                id: 'skin_typeCH2',
                required: true,
                has_input: false,
                has_date: true,
                has_textarea: true,
                date: {
                    id: "date_skin_typeCH2",
                    label: 'Birth Date',
                    value: ''
                },
                textarea: {
                    id: "text_skin_typeCH2",
                    placeholder: "Add Text Here ",
                    label: 'Skin Tone Description',
                    value: ""
                },


                extra_information: "These are the diffrent types of skin step2",
                label: 'Skin Tone CH2',
                parent: "CH2",
                element_type: "image",
                title: "Skin Type",
                types: [
                    {
                        id: 'skin_typeCH21',
                        type: 'RASHY',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH2.skin_type.skin_type1',
                        img: "../images/skin3.jpeg",
                        parent: 'skin_typeCH2',
                        has_child: true,
                        title: "child skin ",
                        extra_information: "These are the child types of skin",
                        childTypes: [
                            { id: 'CH2ST1', parent: 'skin_typeCH21', hierarchy_id: 'CH2.skin_typeCH2.skin_typeCH21.CH2ST1', label: 'Curly', img: '../images/download (1).jpeg' },
                            { id: 'CH2ST2', parent: "skin_typeCH21", hierarchy_id: 'CH2.skin_typeCH2.skin_typeCH21.CH2ST2', label: 'Long', img: '../images/images (3).jpeg', },
                            { id: 'CH2ST3', parent: "skin_typeCH21", hierarchy_id: 'CH2.skin_typeCH2.skin_typeCH21.CH2ST3', label: 'Curly', img: '../images/images (3).jpeg', }
                        ]
                    },

                    {
                        id: 'skin_typeCH22',
                        type: 'Oily',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH2.skin_color.skin_type2',
                        img: "../images/skin5.jpeg",
                        parent: 'skin_typeCH2',
                        has_child: true,
                        title: "child skin type 2  ",
                        extra_information: "These are the child types of skin 2",
                        childTypes: [
                            { id: 'CH2ST1', parent: "skin_typeCH22", hierarchy_id: 'CH2.skin_typeCH2.skin_typeCH22.CH2ST1', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'CH2ST2', parent: "skin_typeCH22", hierarchy_id: 'CH2.skin_typeCH2.skin_typeCH22.CH2ST2', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'CH2ST3', parent: "skin_typeCH22", hierarchy_id: 'CH2.skin_typeCH2.skin_typeCH22.CH2ST3', label: 'Curly', img: '../images/download (1).jpeg', },
                            { id: 'CH2ST4', parent: "skin_typeCH22", hierarchy_id: 'CH2.skin_typeCH2.skin_typeCH22.CH2ST4', label: 'Bun', img: '../images/download (1).jpeg', },
                            { id: 'CH2ST5', parent: "skin_typeCH22", hierarchy_id: 'CH2.skin_typeCH2.skin_typeCH22.CH2ST5', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'CH2ST6', parent: "skin_typeCH22", hierarchy_id: 'CH2.skin_typeCH2.skin_typeCH22.CH2ST6', label: 'Curly', img: '../images/download (1).jpeg', }
                        ]
                    },
                ]

            },

            {
                id: 'hair_typeCH2',
                required: true,
                has_input: false,
                has_date: true,
                has_textarea: true,

                date: {
                    id: "date_hair_typeCH2",
                    label: 'Date',
                    value: ''
                },
                textarea: {
                    id: "text_hair_typeCH2",
                    placeholder: "Add Text Here",
                    label: 'Hair Description',
                    value: ""
                },
                extra_information: "These are the diffrent types of hairs step 2",
                element_type: "checkbox",
                label: 'Hairs CH2',
                title: "Hairs",
                parent: "CH2",
                types: [
                    {
                        id: 'hair_typeCH21',
                        type: 'Swatches',
                        element_type: "image",
                        hierarchy_id: 'CH2.hair_type.hair_type1',
                        img: "../images/images (3).jpeg",
                        parent: 'hair_typeCH2',
                        has_child: true,
                        title: "child hair  ",
                        extra_information: "These are the child types of hair",
                        childTypes: [
                            { id: 'CH2HT1', parent: 'hair_typeCH21', hierarchy_id: 'CH2.hair_typeCH2.hair_typeCH21.CH2HT1', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'CH2HT2', parent: 'hair_typeCH21', hierarchy_id: 'CH2.hair_typeCH2.hair_typeCH21.CH2HT2', label: 'Long', img: '../images/images (3).jpeg', },
                            { id: 'CH2HT3', parent: 'hair_typeCH21', hierarchy_id: 'CH2.hair_typeCH2.hair_typeCH21.CH2HT3', label: 'Curly', img: '../images/images (3).jpeg', }
                        ]
                    },

                    {
                        id: 'hair_typeCH22',
                        type: 'Swatches',
                        element_type: "image",

                        hierarchy_id: 'CH2.hair_color',
                        img: '../images/images (3).jpeg',
                        parent: 'hair_typeCH2',
                        title: "child hair 2 ",
                        extra_information: "These are the child types of hair type 2",
                        has_child: true,
                        childTypes: [
                            { id: 'CH2HC21', parent: 'hair_typeCH22', hierarchy_id: 'CH2.hair_typeCH2.hair_typeCH22.CH2HC21', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'CH2HC22', parent: 'hair_typeCH22', hierarchy_id: 'CH2.hair_typeCH2.hair_typeCH22.CH2HC22', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'CH2HC23', parent: 'hair_typeCH22', hierarchy_id: 'CH2.hair_typeCH2.hair_typeCH22.CH2HC23', label: 'Curly', img: '../images/download (1).jpeg', },
                            { id: 'CH2HT24', parent: 'hair_typeCH22', hierarchy_id: 'CH2.hair_typeCH2.hair_typeCH22.CH2HC24', label: 'Bun', img: '../images/download (1).jpeg', },
                            { id: 'CH2HT25', parent: 'hair_typeCH22', hierarchy_id: 'CH2.hair_typeCH2.hair_typeCH22.CH2HC25', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'CH2HT26', parent: 'hair_typeCH22', hierarchy_id: 'CH2.hair_typeCH2.hair_typeCH22.CH2HC26', label: 'Curly', img: '../images/download (1).jpeg', }
                        ]
                    },
                ]
            },

            {
                id: 'dress_typeCH2',
                required: false,
                has_input: false,
                has_date: false,
                has_textarea: true,
                textarea: {
                    id: "text_dress_typeCH2",
                    placeholder: "Enter Dress Description Here",
                    label: 'Dress Description',
                    value: ""
                },

                extra_information: "These are the diffrent types of dress step 2",
                label: 'Dress CH2',
                element_type: "image",
                title: "Dress",
                parent: "CH2",
                types: [
                    {
                        id: 'dress_typeCH21',
                        type: 'fabric',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH2.dress.dress_type1',
                        img: "../images/dress.jpeg",
                        parent: 'dress_typeCH2',
                        has_child: true,
                        title: "child dress  ",
                        extra_information: "These are the child types of dress type ",
                        childTypes: [
                            { id: 'CH2DT1', parent: 'dress_typeCH21', hierarchy_id: 'CH2.dress_typeCH2.dress_typeCH21.CH2DT1', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'CH2DT2', parent: 'dress_typeCH21', hierarchy_id: 'CH2.dress_typeCH2.dress_typeCH21.CH2DT2', label: 'Long', img: '../images/images (3).jpeg', },
                            { id: 'CH2DT3', parent: 'dress_typeCH21', hierarchy_id: 'CH2.dress_typeCH2.dress_typeCH21.CH2DT3', label: 'Curly', img: '../images/images (3).jpeg', }
                        ]
                    },

                    {
                        id: 'dress_typeCH22',
                        type: 'cotton',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH2.dress.dress_type2',
                        img: '../images/dress2.jpeg',
                        parent: 'dress_typeCH2',
                        has_child: true,
                        title: "child dress 2 ",
                        extra_information: "These are the child types of dress type 2",
                        childTypes: [
                            { id: 'CH2DT21', parent: 'dress_typeCH22', hierarchy_id: 'CH2.dress_typeCH2.dress_typeCH22.CH2DT21', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'CH2DT22', parent: 'dress_typeCH22', hierarchy_id: 'CH2.dress_typeCH2.dress_typeCH22.CH2DT22', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'CH2DT23', parent: 'dress_typeCH22', hierarchy_id: 'CH2.dress_typeCH2.dress_typeCH22.CH2DT23', label: 'Curly', img: '../images/download (1).jpeg', },
                            { id: 'CH2DT24', parent: 'dress_typeCH22', hierarchy_id: 'CH2.dress_typeCH2.dress_typeCH22.CH2DT24', label: 'Bun', img: '../images/download (1).jpeg', },
                            { id: 'CH2DT25', parent: 'dress_typeCH22', hierarchy_id: 'CH2.dress_typeCH2.dress_typeCH22.CH2DT25', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'CH2DT26', parent: 'dress_typeCH22', hierarchy_id: 'CH2.dress_typeCH2.dress_typeCH22.CH2DT26', label: 'Curly', img: '../images/download (1).jpeg', }
                        ]
                    },
                ]
            },

            {
                id: 'name_typeCH2',
                required: true,
                has_input: true,
                has_date: false,
                has_textarea: false,
                input: {
                    id: "input_name_typeCH2",
                    placeholder: "Enter Here",
                    label: 'Enter Name',
                    value: ""
                },

                extra_information: "These are the diffrent types of names step 2",
                placeholder: "name type",
                label: 'Name CH2',
                parent: "CH2",
                title: "Name types",
                element_type: "radio",
                types: [
                    {
                        id: 'name_typeCH21',
                        type: 'alphabet',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH2.name_type.name_type1',
                        img: "../images/images (3).jpeg",
                        parent: 'name_typeCH2',
                        has_child: true,
                        title: "child name  ",
                        extra_information: "These are the child types of name type ",
                        childTypes: [
                            { id: 'CH2NT1', parent: "name_typeCH21", hierarchy_id: 'CH2.name_typeCH2.name_typeCH21.CH2NT1', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'CH2NT2', parent: "name_typeCH21", hierarchy_id: 'CH2.name_typeCH2.name_typeCH21.CH2NT2', label: 'Long', img: '../images/images (3).jpeg', },
                            { id: 'CH2NT3', parent: "name_typeCH21", hierarchy_id: 'CH2.name_typeCH2.name_typeCH21.CH2NT3', label: 'Curly', img: '../images/images (3).jpeg', }
                        ]
                    },

                    {
                        id: 'name_typeCH22',
                        type: 'cotton',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH2.name_color',
                        img: '../images/images (3).jpeg',
                        parent: 'name_typeCH2',
                        title: "child name 2 ",
                        has_child: true,
                        extra_information: "These are the child types of name type 2",
                        childTypes: [
                            { id: 'CH2NT21', parent: "name_typeCH22", hierarchy_id: 'CH2.name_typeCH2.name_typeCH22.CH2NT21', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'CH2NT22', parent: "name_typeCH22", hierarchy_id: 'CH2.name_typeCH2.name_typeCH22.CH2NT22', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'CH2NT23', parent: "name_typeCH22", hierarchy_id: 'CH2.name_typeCH2.name_typeCH22.CH2NT23', label: 'Curly', img: '../images/download (1).jpeg', },
                            { id: 'CH2NT24', parent: "name_typeCH22", hierarchy_id: 'CH2.name_typeCH2.name_typeCH22.CH2NT24', label: 'Bun', img: '../images/download (1).jpeg', },
                            { id: 'CH2NT25', parent: "name_typeCH22", hierarchy_id: 'CH2.name_typeCH2.name_typeCH22.CH2NT25', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'CH2NT26', parent: "name_typeCH22", hierarchy_id: 'CH2.name_typeCH2.name_typeCH22.CH2NT26', label: 'Curly', img: '../images/download (1).jpeg', }
                        ]
                    },
                ]
            },

            {
                id: 'accessoriesCH2',
                label: 'Accessories CH2',
                required: false,
                parent: "CH2",
                title: "Accessories Type",
                element_type: "dropdown",
                has_input: true,
                has_date: false,
                has_textarea: false,
                input: {
                    id: "input_accessories_typeCH2",
                    placeholder: "Enter Type Here",
                    label: 'Accessories Type',
                    value: ""
                },
                extra_information: "These are the diffrent types of accessories step 2",
                placeholder: "name type",
                types: [
                    {
                        id: 'accessories_typeCH21',
                        type: 'accessories',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH2.accessories.accessories_type1',
                        img: "../images/accessories3.jpeg",
                        parent: 'accessoriesCH2',
                        has_child: true,
                        title: "child accessories  ",
                        extra_information: "These are the child types of accessories type ",
                        childTypes: [
                            { id: 'CH2AT1', parent: "accessories_typeCH21", hierarchy_id: 'CH2.accessoriesCH2.accessories_typeCH21.CH2AT1', label: 'Band', img: '../images/images (3).jpeg', },
                            { id: 'CH2AT2', parent: "accessories_typeCH21", hierarchy_id: 'CH2.accessoriesCH2.accessories_typeCH21.CH2AT2', label: 'Belt', img: '../images/images (3).jpeg', },
                            { id: 'CH2AT3', parent: "accessories_typeCH21", hierarchy_id: 'CH2.accessoriesCH2.accessories_typeCH21.CH2AT3', label: 'Sandel', img: '../images/images (3).jpeg', }
                        ]
                    },

                    {
                        id: 'accessories_typeCH22',
                        type: 'Type 2',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH2.accessories.accessories_type2',
                        img: '../images/accessories2.jpeg',
                        parent: 'accessoriesCH2',
                        has_child: true,
                        title: "child accessories 2 ",
                        extra_information: "These are the child types of accessories type 2",
                        childTypes: [
                            { id: 'CH2AC21', parent: "accessories_typeCH22", hierarchy_id: 'CH2.accessoriesCH2.accessories_typeCH22.CH2AT21', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'CH2AC22', parent: "accessories_typeCH22", hierarchy_id: 'CH2.accessoriesCH2.accessories_typeCH22.CH2AT22', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'CH2AC23', parent: "accessories_typeCH22", hierarchy_id: 'CH2.accessoriesCH2.accessories_typeCH22.CH2AT23', label: 'Curly', img: '../images/download (1).jpeg', },
                            { id: 'CH2AT24', parent: "accessories_typeCH22", hierarchy_id: 'CH2.accessoriesCH2.accessories_typeCH22.CH2AT24', label: 'Bun', img: '../images/download (1).jpeg', },
                            { id: 'CH2AT25', parent: "accessories_typeCH22", hierarchy_id: 'CH2.accessoriesCH2.accessories_typeCH22.CH2AT25', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'CH2AT26', parent: "accessories_typeCH22", hierarchy_id: 'CH2.accessoriesCH2.accessories_typeCH22.CH2AT26', label: 'Curly', img: '../images/download (1).jpeg', }
                        ]
                    },
                ]
            }
        ]
    },

    {
        id: "CH3",
        hierarchy_id: 'CH3',
        label: 'Character 3',
        description: 'This is for Character 3',
        tabs: [
            {
                id: 'skin_colorCH3',
                required: true,
                has_input: true,
                has_date: false,
                has_textarea: true,
                input: {
                    id: "input_skin_typeCH3",
                    placeholder: "Enter your Skin Type",
                    label: 'Skin Type',
                    value: ""
                },
                textarea: {
                    id: "text_skin_typeCH3",
                    placeholder: "Add Skin Description Here ",
                    label: 'Skin Description',
                    value: ""
                },

                extra_information: "These are the diffrent types of skin 3",
                label: 'Skin Tone CH3',
                parent: "CH3",
                element_type: "image",
                title: "skin Type",
                types: [
                    {
                        id: 'skin_typeCH31',
                        type: 'RASHY',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH3.skin_type.skin_type1',
                        img: "../images/skin2.jpeg",
                        parent: 'skin_colorCH3',
                        has_child: true,
                        title: "child skin  ",
                        extra_information: "These are the child types of skin type ",
                        childTypes: [
                            { id: 'ST1', parent: "skin_typeCH31", hierarchy_id: 'CH3.skin_colorCH3.skin_type1.ST1', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'ST2', parent: "skin_typeCH31", hierarchy_id: 'CH3.skin_colorCH3.skin_type1.ST2', label: 'Long', img: '../images/images (3).jpeg', },
                            { id: 'ST3', parent: "skin_typeCH31", hierarchy_id: 'CH3.skin_colorCH3.skin_type1.ST3', label: 'Curly', img: '../images/images (3).jpeg', }
                        ]
                    },

                    {
                        id: 'skin_typeCH32',
                        type: 'Oily',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH3.skin_color.skin_type2',
                        img: "../images/skin1.jpeg",
                        parent: 'skin_colorCH3',
                        has_child: true,
                        title: "child skin 2 ",
                        extra_information: "These are the child types of skin type 2 ",
                        childTypes: [
                            { id: 'ST21', parent: "skin_typeCH32", hierarchy_id: 'CH3.skin_colorCH3.skin_typeCH32.ST21', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'ST22', parent: "skin_typeCH32", hierarchy_id: 'CH3.skin_colorCH3.skin_typeCH32.ST22', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'ST23', parent: "skin_typeCH32", hierarchy_id: 'CH3.skin_colorCH3.skin_typeCH32.ST23', label: 'Curly', img: '../images/download (1).jpeg', },
                            { id: 'ST24', parent: "skin_typeCH32", hierarchy_id: 'CH3.skin_colorCH3.skin_typeCH32.ST24', label: 'Bun', img: '../images/download (1).jpeg', },
                            { id: 'ST25', parent: "skin_typeCH32", hierarchy_id: 'CH3.skin_colorCH3.skin_typeCH32.ST25', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'ST26', parent: "skin_typeCH32", hierarchy_id: 'CH3.skin_colorCH3.skin_typeCH32.ST26', label: 'Curly', img: '../images/download (1).jpeg', }
                        ]
                    },
                ]

            },

            {
                id: 'hair_typeCH3',
                required: false,
                has_input: true,
                has_date: true,
                has_textarea: false,
                input: {
                    id: "input_hair_typeCH3",
                    placeholder: "Enter Hair Color Here",
                    label: 'Skin Color',
                    value: ""
                },

                date: {
                    id: "date_hair_typeCH3",
                    label: 'Join Date',
                    value: ''
                },

                extra_information: "These are the diffrent types of hair 3",
                label: 'Hairs CH3',
                parent: "CH3",
                element_type: "image",
                title: "Hair Type",
                types: [
                    {
                        id: 'hair_typeCH31',
                        type: 'Swatches',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH3.hair_type.hair_type1',
                        img: "../images/images (3).jpeg",
                        parent: 'hair_typeCH3',
                        has_child: true,
                        title: "child hair  ",
                        extra_information: "These are the child types of hair type ",
                        childTypes: [
                            { id: 'HT1', parent: 'hair_typeCH31', hierarchy_id: 'CH3.hair_typeCH3.hair_typeCH31.HT1', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'HT2', parent: 'hair_typeCH31', hierarchy_id: 'CH3.hair_typeCH3.hair_typeCH31.HT2', label: 'Long', img: '../images/images (3).jpeg', },
                            { id: 'HT3', parent: 'hair_typeCH31', hierarchy_id: 'CH3.hair_typeCH3.hair_typeCH31.HT3', label: 'Curly', img: '../images/images (3).jpeg', }
                        ]
                    },

                    {
                        id: 'hair_typeCH32',
                        type: 'Swatches',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH3.hair_color',
                        img: '../images/images (3).jpeg',
                        parent: 'hair_typeCH3',
                        has_child: true,
                        title: "child hair 2 ",
                        extra_information: "These are the child types of hair type 2",
                        childTypes: [
                            { id: 'HC21', parent: 'hair_typeCH32', hierarchy_id: 'CH3.hair_typeCH3.hair_typeCH32.HC21', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'HC22', parent: 'hair_typeCH32', hierarchy_id: 'CH3.hair_typeCH3.hair_typeCH32.HC22', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'HC23', parent: 'hair_typeCH32', hierarchy_id: 'CH3.hair_typeCH3.hair_typeCH32.HC23', label: 'Curly', img: '../images/download (1).jpeg', },
                            { id: 'HT24', parent: 'hair_typeCH32', hierarchy_id: 'CH3.hair_typeCH3.hair_typeCH32.HC24', label: 'Bun', img: '../images/download (1).jpeg', },
                            { id: 'HT25', parent: 'hair_typeCH32', hierarchy_id: 'CH3.hair_typeCH3.hair_typeCH32.HC25', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'HT26', parent: 'hair_typeCH32', hierarchy_id: 'CH3.hair_typeCH3.hair_typeCH32.HC26', label: 'Curly', img: '../images/download (1).jpeg', }
                        ]
                    },
                ]
            },

            {
                id: 'dress_typeCH3',
                required: true,
                has_input: true,
                has_date: false,
                has_textarea: false,
                input: {
                    id: "input_dress_typeCH3",
                    placeholder: "Enter dress Style",
                    label: 'Dress Style',
                    value: ""
                },
                extra_information: "These are the diffrent types of dress 3",
                label: 'Dress CH3',
                parent: "CH3",
                title: "Dress Type",
                element_type: "image",
                types: [
                    {
                        id: 'dress_typeCH31',
                        type: 'fabric',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH3.dress.dress_type1',
                        img: '../images/dress2.jpeg',
                        parent: 'dress_typeCH3',
                        has_child: true,
                        title: "child name  ",
                        extra_information: "These are the child types of name type ",
                        childTypes: [
                            { id: 'DT1', parent: 'dress_typeCH31', hierarchy_id: 'CH3.dress_typeCH3.dress_typeCH31.DT1', label: 'Bun', img: '../images/dress3.jpeg', },
                            { id: 'DT2', parent: 'dress_typeCH31', hierarchy_id: 'CH3.dress_typeCH3.dress_typeCH31.DT2', label: 'Long', img: '../images/dress4.jpeg', },
                            { id: 'DT3', parent: 'dress_typeCH31', hierarchy_id: 'CH3.dress_typeCH3.dress_typeCH31.DT3', label: 'Curly', img: '../images/dress5.jpeg', }
                        ]
                    },

                    {
                        id: 'dress_typeCH32',
                        type: 'cotton',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH3.dress.dress_type2',
                        img: '../images/dress.jpeg',
                        parent: 'dress_typeCH3',
                        has_child: true,
                        title: "child dress 2 ",
                        extra_information: "These are the child types of name dress 2",
                        childTypes: [
                            { id: 'DT21', parent: 'dress_typeCH32', hierarchy_id: 'CH3.dress_typeCH3.dress_typeCH32.DT21', label: 'Bun', img: '../images/dress3.jpeg', },
                            { id: 'DT22', parent: 'dress_typeCH32', hierarchy_id: 'CH3.dress_typeCH3.dress_typeCH32.DT22', label: 'Long', img: '../images/dress4.jpeg', },
                            { id: 'DT23', parent: 'dress_typeCH32', hierarchy_id: 'CH3.dress_typeCH3.dress_typeCH32.DT23', label: 'Curly', img: '../images/dress5.jpeg', },
                            { id: 'DT24', parent: 'dress_typeCH32', hierarchy_id: 'CH3.dress_typeCH3.dress_typeCH32.DT24', label: 'Bun', img: '../images/download (1).jpeg', },
                            { id: 'DT25', parent: 'dress_typeCH32', hierarchy_id: 'CH3.dress_typeCH3.dress_typeCH32.DT25', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'DT26', parent: 'dress_typeCH32', hierarchy_id: 'CH3.dress_typeCH3.dress_typeCH32.DT26', label: 'Curly', img: '../images/download (1).jpeg', }
                        ]
                    },
                ]
            },

            {
                id: 'name_typeCH3',
                required: false,
                has_input: true,
                has_date: false,
                has_textarea: true,
                input: {
                    id: "input_name_typeCH3",
                    placeholder: "Enter Your Name Here",
                    label: 'Enter Name',
                    value: ""
                },
                textarea: {
                    id: "text_name_typeCH3",
                    placeholder: "Enter Here",
                    label: 'About You',
                    value: ""
                },
                extra_information: "These are the diffrent types of names 3",
                label: 'Name CH3',
                title: "Name Type",
                parent: "CH3",
                element_type: "image",
                types: [
                    {
                        id: 'name_typeCH31',
                        type: 'alphabet',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH3.name_type.name_type1',
                        img: "../images/images (3).jpeg",
                        parent: 'name_typeCH3',
                        has_child: true,
                        title: "child name  ",
                        extra_information: "These are the child types of name type ",
                        childTypes: [
                            { id: 'NT1', parent: "name_typeCH31", hierarchy_id: 'CH3.name_typeCH3.name_typeCH31.NT1', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'NT2', parent: "name_typeCH31", hierarchy_id: 'CH3.name_typeCH3.name_typeCH31.NT2', label: 'Long', img: '../images/images (3).jpeg', },
                            { id: 'NT3', parent: "name_typeCH31", hierarchy_id: 'CH3.name_typeCH3.name_typeCH31.NT3', label: 'Curly', img: '../images/images (3).jpeg', }
                        ]
                    },

                    {
                        id: 'name_typeCH32',
                        type: 'cotton',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH3.name_color',
                        img: '../images/images (3).jpeg',
                        parent: 'name_typeCH3',
                        has_child: true,
                        title: "child name 2 ",
                        extra_information: "These are the child types of name type 2",
                        childTypes: [
                            { id: 'NT21', parent: "name_typeCH32", hierarchy_id: 'CH3.name_typeCH3.name_typeCH32.NT21', label: 'Bun', img: '../images/images (3).jpeg', },
                            { id: 'NT22', parent: "name_typeCH32", hierarchy_id: 'CH3.name_typeCH3.name_typeCH32.NT22', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'NT23', parent: "name_typeCH32", hierarchy_id: 'CH3.name_typeCH3.name_typeCH32.NT23', label: 'Curly', img: '../images/download (1).jpeg', },
                            { id: 'NT24', parent: "name_typeCH32", hierarchy_id: 'CH3.name_typeCH3.name_typeCH32.NT24', label: 'Bun', img: '../images/download (1).jpeg', },
                            { id: 'NT25', parent: "name_typeCH32", hierarchy_id: 'CH3.name_typeCH3.name_typeCH32.NT25', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'NT26', parent: "name_typeCH32", hierarchy_id: 'CH3.name_typeCH3.name_typeCH32.NT26', label: 'Curly', img: '../images/download (1).jpeg', }
                        ]
                    },
                ]
            },

            {
                id: 'accessoriesCH3',
                required: false,
                has_input: false,
                has_date: true,
                has_textarea: false,
                date: {
                    id: "date_accessories_typeCH3",
                    label: 'Delivery Date',
                    value: ''
                },
                extra_information: "These are the diffrent types of accessories 3",
                label: 'Accessories CH3',
                parent: "CH3",
                title: "accessories ",
                element_type: "image",
                types: [
                    {
                        id: 'accessories_typeCH31',
                        type: 'accessories',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH3.accessories.accessories_type1',
                        img: "../images/accessories1.jpeg",
                        parent: 'accessoriesCH3',
                        has_child: true,
                        title: "child accessories 3 ",
                        extra_information: "These are the child types of accessories type ",
                        childTypes: [
                            { id: 'AT1', parent: "accessories_typeCH31", hierarchy_id: 'CH3.accessoriesCH3.accessories_typeCH31.AT1', label: 'Band', img: '../images/accessories5.jpeg', },
                            { id: 'AT2', parent: "accessories_typeCH31", hierarchy_id: 'CH3.accessoriesCH3.accessories_typeCH31.AT2', label: 'Belt', img: '../images/accessories3.jpeg', },
                            { id: 'AT3', parent: "accessories_typeCH31", hierarchy_id: 'CH3.accessoriesCH3.accessories_typeCH31.AT3', label: 'Sandel', img: '../images/accessories2.jpeg', }
                        ]
                    },

                    {
                        id: 'accessories_typeCH32',
                        type: 'accessories 2',
                        element_type: "image",
                        required: true,
                        hierarchy_id: 'CH3.accessories.accessories_type2',
                        img: '../images/accessories3.jpeg',
                        parent: 'accessoriesCH3',
                        has_child: true,
                        title: "child accessories 2 ",
                        extra_information: "These are the child types of accessories type 2",
                        childTypes: [
                            { id: 'AT21', parent: "accessories_typeCH32", hierarchy_id: 'CH3.accessoriesCH3.accessories_typeCH32.AT21', label: 'Bun', img: '../images/accessories.jpeg', },
                            { id: 'AT22', parent: "accessories_typeCH32", hierarchy_id: 'CH3.accessoriesCH3.accessories_typeCH32.AT22', label: 'Long', img: '../images/accessories1.jpeg', },
                            { id: 'AT23', parent: "accessories_typeCH32", hierarchy_id: 'CH3.accessoriesCH3.accessories_typeCH32.AT23', label: 'Curly', img: '../images/accessories2.jpeg', },
                            { id: 'AT24', parent: "accessories_typeCH32", hierarchy_id: 'CH3.accessoriesCH3.accessories_typeCH32.AT24', label: 'Bun', img: '../images/download (1).jpeg', },
                            { id: 'AT25', parent: "accessories_typeCH32", hierarchy_id: 'CH3.accessoriesCH3.accessories_typeCH32.AT25', label: 'Long', img: '../images/download (1).jpeg', },
                            { id: 'AT26', parent: "accessories_typeCH32", hierarchy_id: 'CH3.accessoriesCH3.accessories_typeCH32.AT26', label: 'Curly', img: '../images/download (1).jpeg', }
                        ]
                    },
                ]
            }
        ]

    },
]















