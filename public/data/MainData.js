export const jsonData = [
    {
        "type": "Tabs",
        "id": "mainContainer",
        "data": [
            {
                "id": "character1",
                "title": "Character 1",
                "icon": {
                    "url": ""
                },
                "children": {
                    "type": "Tabs-Vertical",
                    "id": "secondaryContainer",
                    "data": [
                        {
                            "title": "Hair",
                            "id": "character1.hair",
                            "icon": {
                                "url": ""
                            },
                            "children": {
                                "type": "Dropdown",
                                "id": "character1.hair.options",
                                "data": [
                                    { "label": "Short", "value": "short" },
                                    { "label": "Medium", "value": "medium" },
                                    { "label": "Long", "value": "long" }
                                ]
                            }
                        },
                        {
                            "title": "Skin Color",
                            "id": "character1.skincolor",
                            "icon": {
                                "url": ""
                            },
                            "children": {
                                "type": "Dropdown",
                                "id": "character1.skincolor.options",
                                "data": [
                                    { "label": "Fair", "value": "fair" },
                                    { "label": "Medium", "value": "medium" },
                                    { "label": "Dark", "value": "dark" }
                                ]
                            }
                        }
                    ]
                }
            },
            {
                "id": "character2",
                "title": "Character 2",
                "icon": {
                    "url": ""
                },
                "children": {
                    "type": "Tabs-Vertical",
                    "id": "secondaryContainer2",
                    "data": [
                        {
                            "title": "Hair",
                            "id": "character2.hair",
                            "icon": {
                                "url": ""
                            },
                            "children": {
                                "type": "Dropdown",
                                "id": "character2.hair.options",
                                "data": [
                                    { "label": "Short", "value": "short" },
                                    { "label": "Medium", "value": "medium" },
                                    { "label": "Long", "value": "long" }
                                ]
                            }
                        },
                        {
                            "title": "Skin Color",
                            "id": "character2.skincolor",
                            "children": {
                                "type": "Dropdown",
                                "id": "character2.skincolor.options",
                                "data": [
                                    { "label": "Fair", "value": "fair" },
                                    { "label": "Medium", "value": "medium" },
                                    { "label": "Dark", "value": "dark" }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }
]