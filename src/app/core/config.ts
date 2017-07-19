// @todo: Delete this file when we have config API in place
export const config = {
    "Project": [
        {
            "Name": "Default",
            "ID": 1,
            "QuestionnaireTypes": [
                {
                    "DisplayName": "Expert Mode",
                    "ID": 1,
                    "PageTypes": [
                        {
                            "Name": "SingleQuestionPage",
                            "DisplayName": "Single Question Page",
                            "ID": 1,
                            "QuestionTypes": [
                                {
                                    "Name": "SingleQuestionSingleResponse",
                                    "DisplayName": "Single Response",
                                    "ID": 1,
                                    "Settings": [
                                        {
                                            "AnswerSettings": [
                                                {
                                                    "Name": "ExcludeFromRandomize",
                                                    "DefaultValue": "False"
                                                },
                                                {
                                                    "Name": "ActiveAnswer"
                                                },
                                                {
                                                    "Name": "Routing",
                                                    "Function": "GetSetRoutePage()"
                                                },
                                                {
                                                    "Name": "AddPictureOrIcon"
                                                }
                                            ]
                                        },
                                        {
                                            "QuestionSettings": [
                                                {
                                                    "Name": "RandomizeAnswers"
                                                },
                                                {
                                                    "Name": "CreateOtherCategory",
                                                    "DefaultValue": "False"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Name": "SingleQuestionMultiResponse",
                                    "DisplayName": "Multi Response",
                                    "ID": 2,
                                    "Settings": [
                                        {
                                            "AnswerSettings": [
                                                {
                                                    "Name": "ExcludeFromRandomize",
                                                    "DefaultValue": "False"
                                                },
                                                {
                                                    "Name": "ActiveAnswer"
                                                },
                                                {
                                                    "Name": "Routing",
                                                    "Function": "GetSetRoutePage()"
                                                },
                                                {
                                                    "Name": "AddPictureOrIcon"
                                                }
                                            ]
                                        },
                                        {
                                            "QuestionSettings": [
                                                {
                                                    "Name": "RandomizeAnswers"
                                                },
                                                {
                                                    "Name": "CreateOtherCategory",
                                                    "DefaultValue": "False"
                                                },
                                                {
                                                    "Name": "MinimumAnswerOptionSelection",
                                                    "DefaultValue": "2"
                                                },
                                                {
                                                    "Name": "MaximumAnswerOptionSelection",
                                                    "DefaultValue": "2"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Name": "SingleQuestionXPointScale",
                                    "DisplayName": "X Point Scale",
                                    "ID": 3,
                                    "Settings": [
                                        {
                                            "AnswerSettings": []
                                        },
                                        {
                                            "QuestionSettings": [
                                                {
                                                    "Name": "LowestScaleNumber",
                                                    "DefaultValue": "0"
                                                },
                                                {
                                                    "Name": "HighestScaleNumber",
                                                    "DefaultValue": "10"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Name": "SingleQuestionComment",
                                    "DisplayName": "Comment Type",
                                    "ID": 4,
                                    "Settings": [
                                        {
                                            "AnswerSettings": []
                                        },
                                        {
                                            "QuestionSettings": [
                                                {
                                                    "Name": "HTMLEditor",
                                                    "DefaultValue": "False"
                                                },
                                                {
                                                    "Name": "MaximumNumberOfCharacters",
                                                    "DefaultValue": "1000"
                                                },
                                                {
                                                    "Name": "MinimumNumberOfCharacters",
                                                    "DefaultValue": "1"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Name": "SingleQuestionMediaRecording",
                                    "DisplayName": "Media Recording",
                                    "ID": 5,
                                    "Settings": [
                                        {
                                            "AudioSettings": [
                                                {
                                                    "Name": "RecordComputerMic",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "RecordPhoneOrTabletMic",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "UploadFile",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "MaximumLengthOfAudio",
                                                    "DefaultValue": "300"
                                                }
                                            ]
                                        },
                                        {
                                            "ModeSettings": [
                                                {
                                                    "Name": "AudioMode",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "VideoMode",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "PhotoMode",
                                                    "DefaultValue": "True"
                                                }
                                            ]
                                        },
                                        {
                                            "PhotoSettings": [
                                                {
                                                    "Name": "CameraWebcam",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "CameraPhoneOrTablet",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "UploadFile",
                                                    "DefaultValue": "True"
                                                }
                                            ]
                                        },
                                        {
                                            "VideoSettings": [
                                                {
                                                    "Name": "RecordComputerMic"
                                                },
                                                {
                                                    "Name": "RecordPhotoOrTabletMic"
                                                },
                                                {
                                                    "Name": "UploadFile",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "MaximumLengthOfAudio"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "PageSettings": [
                                {
                                    "Name": "Active",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "View",
                                    "DefaultValue": "Slider",
                                    "Function": "GetView()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowProgressBar",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "AutoProcess",
                                    "DefaultVaule": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Routing",
                                    "DefaultValue": "GetSetRoutePage()",
                                    "Function": "GetAvailablePagesGreaterThanCurrentInQuestionnaire()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowNextButton",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowPreviousButton",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Required",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Status",
                                    "Function": "GetStatus()",
                                    "AvailableValues": [
                                        "Completed",
                                        "Partially Completed",
                                        "New",
                                        "Active"
                                    ],
                                    "DefaultValue": "Active",
                                    "Category": "General"
                                },
                                {
                                    "Name": "NAOption",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "NumberOfRespondents",
                                    "Function": "GetNumberOfRespondentsForCurrentPage()",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "SkipPageOnRespondentsCount",
                                    "DefaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "VisibleToPercentageOfRespondents",
                                    "DafaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "ErrorMessage",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "MatrixType",
                                    "DefaultValue": null,
                                    "Category": "Others"
                                }
                            ],
                            "SubPageTypes": []
                        },
                        {
                            "Name": "MatrixQuestionPage",
                            "DisplayName": "Matrix Question Page",
                            "ID": 2,
                            "QuestionTypes": [
                                {
                                    "Name": "MatrixQuestionSingleResponse",
                                    "DisplayName": "Single Response",
                                    "ID": 6,
                                    "Settings": [
                                        {
                                            "ColumnSettings": [
                                                {
                                                    "Name": "ExcludeFromRandomize",
                                                    "DefaultValue": "False"
                                                },
                                                {
                                                    "Name": "ActiveAnswer",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "Routing",
                                                    "DefaultValue": "GetSetRoutePage()"
                                                },
                                                {
                                                    "Name": "AddPictureOrIcon",
                                                    "DefaultValue": "True"
                                                }
                                            ]
                                        },
                                        {
                                            "RowSettings": [
                                                {
                                                    "Name": "NAOption",
                                                    "DefaultValue": "False"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Name": "MatrixQuestionMultiResponse",
                                    "DisplayName": "Multi Response",
                                    "ID": 7,
                                    "Settings": [
                                        {
                                            "ColumnSettings": [
                                                {
                                                    "Name": "ActiveAnswer",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "AddPictureOrIcon",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "ExcludeFromRandomize",
                                                    "DefaultValue": "False"
                                                },
                                                {
                                                    "Name": "Routing",
                                                    "DefaultValue": "GetSetRoutePage()"
                                                }
                                            ]
                                        },
                                        {
                                            "RowSettings": [
                                                {
                                                    "Name": "NAOption",
                                                    "DefaultValue": "False"
                                                },
                                                {
                                                    "Name": "MinimumOptionAnswerSelection"
                                                },
                                                {
                                                    "Name": "MaximumOptionAnswerSelection"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Name": "MatrixQuestionXPointScale",
                                    "DisplayName": "X Point Scale",
                                    "ID": 8,
                                    "Settings": [
                                        {
                                            "ColumnSettings": []
                                        },
                                        {
                                            "RowSettings": [
                                                {
                                                    "Name": "LowestScaleNumber",
                                                    "DefaultValue": "0"
                                                },
                                                {
                                                    "Name": "HighestScaleNumber",
                                                    "DefaultValue": "10"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "PageSettings": [
                                {
                                    "Name": "Active",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "View",
                                    "DefaultValue": "Slider",
                                    "Function": "GetView()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowProgressBar",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "AutoProcess",
                                    "DefaultVaule": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Routing",
                                    "DefaultValue": "GetSetRoutePage()",
                                    "Function": "GetAvailablePagesGreaterThanCurrentInQuestionnaire()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowNextButton",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowPreviousButton",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Required",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Status",
                                    "Function": "GetStatus()",
                                    "AvailableValues": [
                                        "Completed",
                                        "Partially Completed",
                                        "New",
                                        "Active"
                                    ],
                                    "DefaultValue": "Active",
                                    "Category": "General"
                                },
                                {
                                    "Name": "NAOption",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "NumberOfRespondents",
                                    "Function": "GetNumberOfRespondentsForCurrentPage()",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "SkipPageOnRespondentsCount",
                                    "DefaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "VisibleToPercentageOfRespondents",
                                    "DafaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "ErrorMessage",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "MatrixType",
                                    "DefaultValue": null,
                                    "Category": "Others"
                                }
                            ],
                            "SubPageTypes": []
                        },
                        {
                            "Name": "InputFormPage",
                            "DisplayName": "Input Form Page",
                            "ID": 3,
                            "PageSettings": [
                                {
                                    "Name": "Active",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "View",
                                    "DefaultValue": "Slider",
                                    "Function": "GetView()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowProgressBar",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "AutoProcess",
                                    "DefaultVaule": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Routing",
                                    "DefaultValue": "GetSetRoutePage()",
                                    "Function": "GetAvailablePagesGreaterThanCurrentInQuestionnaire()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowNextButton",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowPreviousButton",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Required",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Status",
                                    "Function": "GetStatus()",
                                    "AvailableValues": [
                                        "Completed",
                                        "Partially Completed",
                                        "New",
                                        "Active"
                                    ],
                                    "DefaultValue": "Active",
                                    "Category": "General"
                                },
                                {
                                    "Name": "NAOption",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "NumberOfRespondents",
                                    "Function": "GetNumberOfRespondentsForCurrentPage()",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "SkipPageOnRespondentsCount",
                                    "DefaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "VisibleToPercentageOfRespondents",
                                    "DafaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "ErrorMessage",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "MatrixType",
                                    "DefaultValue": null,
                                    "Category": "Others"
                                }
                            ],
                            "QuestionTypes": [],
                            "SubPageTypes": []
                        },
                        {
                            "Name": "SummaryPage",
                            "DisplayName": "Summary Page",
                            "ID": 4,
                            "PageSettings": [
                                {
                                    "Name": "Active",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "View",
                                    "DefaultValue": "Slider",
                                    "Function": "GetView()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowProgressBar",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "AutoProcess",
                                    "DefaultVaule": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Routing",
                                    "DefaultValue": "GetSetRoutePage()",
                                    "Function": "GetAvailablePagesGreaterThanCurrentInQuestionnaire()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowNextButton",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowPreviousButton",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Required",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Status",
                                    "Function": "GetStatus()",
                                    "AvailableValues": [
                                        "Completed",
                                        "Partially Completed",
                                        "New",
                                        "Active"
                                    ],
                                    "DefaultValue": "Active",
                                    "Category": "General"
                                },
                                {
                                    "Name": "NAOption",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "NumberOfRespondents",
                                    "Function": "GetNumberOfRespondentsForCurrentPage()",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "SkipPageOnRespondentsCount",
                                    "DefaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "VisibleToPercentageOfRespondents",
                                    "DafaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "ErrorMessage",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "MatrixType",
                                    "DefaultValue": null,
                                    "Category": "Others"
                                }
                            ],
                            "QuestionTypes": [],
                            "SubPageTypes": []
                        },
                        {
                            "Name": "VOCKPI",
                            "DisplayName": "VOC - KPI",
                            "ID": 6,
                            "QuestionTypes": [
                                {
                                    "Name": "NetPromoterScore",
                                    "DisplayName": "Net Promoter Score (NPS)",
                                    "ID": 11,
                                    "Settings": [
                                        {
                                            "AnswerSettings": []
                                        },
                                        {
                                            "QuestionSettings": [
                                                {
                                                    "Name": "CategoryColor",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "KPIType",
                                                    "DefaultValue": "NPS"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Name": "CustomerSupportScore",
                                    "DisplayName": "Customer Support Score",
                                    "ID": 12,
                                    "Settings": [
                                        {
                                            "AnswerSettings": []
                                        },
                                        {
                                            "QuestionSettings": [
                                                {
                                                    "Name": "CategoryColor",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "KPIType",
                                                    "DefaultValue": "NPS"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Name": "CustomerSatisfactionScore",
                                    "DisplayName": "Customer Satisfaction Score",
                                    "ID": 13,
                                    "Settings": [
                                        {
                                            "QuestionSettings": [
                                                {
                                                    "Name": "CategoryColor",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "KPIType",
                                                    "DefaultValue": "NPS"
                                                }
                                            ]
                                        },
                                        {
                                            "AnswerSettings": []
                                        }
                                    ]
                                }
                            ],
                            "PageSettings": [
                                {
                                    "Name": "Active",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "View",
                                    "DefaultValue": "Slider",
                                    "Function": "GetView()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowProgressBar",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "AutoProcess",
                                    "DefaultVaule": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Routing",
                                    "DefaultValue": "GetSetRoutePage()",
                                    "Function": "GetAvailablePagesGreaterThanCurrentInQuestionnaire()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowNextButton",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowPreviousButton",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Required",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Status",
                                    "Function": "GetStatus()",
                                    "AvailableValues": [
                                        "Completed",
                                        "Partially Completed",
                                        "New",
                                        "Active"
                                    ],
                                    "DefaultValue": "Active",
                                    "Category": "General"
                                },
                                {
                                    "Name": "NAOption",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "NumberOfRespondents",
                                    "Function": "GetNumberOfRespondentsForCurrentPage()",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "SkipPageOnRespondentsCount",
                                    "DefaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "VisibleToPercentageOfRespondents",
                                    "DafaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "ErrorMessage",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "MatrixType",
                                    "DefaultValue": null,
                                    "Category": "Others"
                                }
                            ],
                            "SubPageTypes": []
                        },
                        {
                            "Name": "VOCRootCause",
                            "DisplayName": "VOC - Root Cause",
                            "ID": 7,
                            "QuestionTypes": [
                                {
                                    "Name": "RootCause",
                                    "DisplayName": "Root Cause",
                                    "ID": 13,
                                    "Settings": [
                                        {
                                            "AnswerSettings": [
                                                {
                                                    "Name": "ExcludeFromRandomize",
                                                    "DefaultValue": "False"
                                                },
                                                {
                                                    "Name": "ActiveAnswer"
                                                },
                                                {
                                                    "Name": "Routing",
                                                    "Function": "GetSetRoutePage()"
                                                },
                                                {
                                                    "Name": "AddPictureOrIcon"
                                                }
                                            ]
                                        },
                                        {
                                            "QuestionSettings": [
                                                {
                                                    "Name": "RandomizeAnswer",
                                                    "DefaultValue": "False"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "PageSettings": [
                                {
                                    "Name": "Active",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "View",
                                    "DefaultValue": "Slider",
                                    "Function": "GetView()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowProgressBar",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "AutoProcess",
                                    "DefaultVaule": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Routing",
                                    "DefaultValue": "GetSetRoutePage()",
                                    "Function": "GetAvailablePagesGreaterThanCurrentInQuestionnaire()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowNextButton",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowPreviousButton",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Required",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Status",
                                    "Function": "GetStatus()",
                                    "AvailableValues": [
                                        "Completed",
                                        "Partially Completed",
                                        "New",
                                        "Active"
                                    ],
                                    "DefaultValue": "Active",
                                    "Category": "General"
                                },
                                {
                                    "Name": "NAOption",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "NumberOfRespondents",
                                    "Function": "GetNumberOfRespondentsForCurrentPage()",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "SkipPageOnRespondentsCount",
                                    "DefaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "VisibleToPercentageOfRespondents",
                                    "DafaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "ErrorMessage",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "MatrixType",
                                    "DefaultValue": null,
                                    "Category": "Others"
                                }
                            ],
                            "SubPageTypes": []
                        },
                        {
                            "Name": "SystemPage",
                            "DisplayName": "System Page",
                            "ID": 5,
                            "SubPageTypes": [
                                {
                                    "Name": "InformationPage",
                                    "DisplayName": "Information Page",
                                    "ID": 1
                                },
                                {
                                    "Name": "CompletedPage",
                                    "DisplayName": "Completed Page",
                                    "ID": 2
                                },
                                {
                                    "Name": "TimeElapsedPage",
                                    "DisplayName": "Time Elapsed Page",
                                    "ID": 3
                                },
                                {
                                    "Name": "GroupingPage",
                                    "DisplayName": "Grouping Page",
                                    "ID": 4
                                }
                            ],
                            "PageSettings": [
                                {
                                    "Name": "Active",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "View",
                                    "DefaultValue": "Slider",
                                    "Function": "GetView()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowProgressBar",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "AutoProcess",
                                    "DefaultVaule": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Routing",
                                    "DefaultValue": "GetSetRoutePage()",
                                    "Function": "GetAvailablePagesGreaterThanCurrentInQuestionnaire()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowNextButton",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowPreviousButton",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Required",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Status",
                                    "Function": "GetStatus()",
                                    "AvailableValues": [
                                        "Completed",
                                        "Partially Completed",
                                        "New",
                                        "Active"
                                    ],
                                    "DefaultValue": "Active",
                                    "Category": "General"
                                },
                                {
                                    "Name": "NAOption",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "NumberOfRespondents",
                                    "Function": "GetNumberOfRespondentsForCurrentPage()",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "SkipPageOnRespondentsCount",
                                    "DefaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "VisibleToPercentageOfRespondents",
                                    "DafaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "ErrorMessage",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "MatrixType",
                                    "DefaultValue": null,
                                    "Category": "Others"
                                }
                            ],
                            "QuestionTypes": []
                        }
                    ],
                    "Modes": [
                        {
                            "Name": "Online",
                            "ID": 1,
                            "Status": "true"
                        },
                        {
                            "Name": "Offline",
                            "ID": 2,
                            "Status": "false"
                        },
                        {
                            "Name": "SMS",
                            "ID": 3,
                            "Status": "false"
                        },
                        {
                            "Name": "FeedbackWidget",
                            "ID": 4,
                            "Status": "false"
                        }
                    ],
                    "Scoring": {
                        "IsScoringAvailable": "true"
                    }
                },
                {
                    "DisplayName": "Voice Of Customer - (VOC)",
                    "ID": 2,
                    "PageTypes": [
                        {
                            "Name": "SingleQuestionPage",
                            "DisplayName": "Single Question Page",
                            "ID": 1,
                            "QuestionTypes": [
                                {
                                    "Name": "SingleQuestionSingleResponse",
                                    "DisplayName": "Single Response",
                                    "ID": 1,
                                    "Settings": [
                                        {
                                            "AnswerSettings": [
                                                {
                                                    "Name": "ExcludeFromRandomize",
                                                    "DefaultValue": "False"
                                                },
                                                {
                                                    "Name": "ActiveAnswer"
                                                },
                                                {
                                                    "Name": "Routing",
                                                    "Function": "GetSetRoutePage()"
                                                },
                                                {
                                                    "Name": "AddPictureOrIcon"
                                                }
                                            ]
                                        },
                                        {
                                            "QuestionSettings": [
                                                {
                                                    "Name": "RandomizeAnswers"
                                                },
                                                {
                                                    "Name": "CreateOtherCategory",
                                                    "DefaultValue": "False"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Name": "SingleQuestionMultiResponse",
                                    "DisplayName": "Multi Response",
                                    "ID": 2,
                                    "Settings": [
                                        {
                                            "AnswerSettings": [
                                                {
                                                    "Name": "ExcludeFromRandomize",
                                                    "DefaultValue": "False"
                                                },
                                                {
                                                    "Name": "ActiveAnswer"
                                                },
                                                {
                                                    "Name": "Routing",
                                                    "Function": "GetSetRoutePage()"
                                                },
                                                {
                                                    "Name": "AddPictureOrIcon"
                                                }
                                            ]
                                        },
                                        {
                                            "QuestionSettings": [
                                                {
                                                    "Name": "RandomizeAnswers"
                                                },
                                                {
                                                    "Name": "CreateOtherCategory",
                                                    "DefaultValue": "False"
                                                },
                                                {
                                                    "Name": "MinimumAnswerOptionSelection",
                                                    "DefaultValue": "2"
                                                },
                                                {
                                                    "Name": "MaximumAnswerOptionSelection",
                                                    "DefaultValue": "2"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Name": "SingleQuestionXPointScale",
                                    "DisplayName": "X Point Scale",
                                    "ID": 3,
                                    "Settings": [
                                        {
                                            "AnswerSettings": []
                                        },
                                        {
                                            "QuestionSettings": [
                                                {
                                                    "Name": "LowestScaleNumber",
                                                    "DefaultValue": "0"
                                                },
                                                {
                                                    "Name": "HighestScaleNumber",
                                                    "DefaultValue": "10"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Name": "SingleQuestionComment",
                                    "DisplayName": "Comment Type",
                                    "ID": 4,
                                    "Settings": [
                                        {
                                            "AnswerSettings": []
                                        },
                                        {
                                            "QuestionSettings": [
                                                {
                                                    "Name": "HTMLEditor",
                                                    "DefaultValue": "False"
                                                },
                                                {
                                                    "Name": "MaximumNumberOfCharacters",
                                                    "DefaultValue": "1000"
                                                },
                                                {
                                                    "Name": "MinimumNumberOfCharacters",
                                                    "DefaultValue": "1"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Name": "SingleQuestionMediaRecording",
                                    "DisplayName": "Media Recording",
                                    "ID": 5,
                                    "Settings": [
                                        {
                                            "AudioSettings": [
                                                {
                                                    "Name": "RecordComputerMic",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "RecordPhoneOrTabletMic",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "UploadFile",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "MaximumLengthOfAudio",
                                                    "DefaultValue": "300"
                                                }
                                            ]
                                        },
                                        {
                                            "ModeSettings": [
                                                {
                                                    "Name": "AudioMode",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "VideoMode",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "PhotoMode",
                                                    "DefaultValue": "True"
                                                }
                                            ]
                                        },
                                        {
                                            "PhotoSettings": [
                                                {
                                                    "Name": "CameraWebcam",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "CameraPhoneOrTablet",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "UploadFile",
                                                    "DefaultValue": "True"
                                                }
                                            ]
                                        },
                                        {
                                            "VideoSettings": [
                                                {
                                                    "Name": "RecordComputerMic"
                                                },
                                                {
                                                    "Name": "RecordPhotoOrTabletMic"
                                                },
                                                {
                                                    "Name": "UploadFile",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "MaximumLengthOfAudio"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "PageSettings": [
                                {
                                    "Name": "Active",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "View",
                                    "DefaultValue": "Slider",
                                    "Function": "GetView()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowProgressBar",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "AutoProcess",
                                    "DefaultVaule": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Routing",
                                    "DefaultValue": "GetSetRoutePage()",
                                    "Function": "GetAvailablePagesGreaterThanCurrentInQuestionnaire()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowNextButton",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowPreviousButton",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Required",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Status",
                                    "Function": "GetStatus()",
                                    "AvailableValues": [
                                        "Completed",
                                        "Partially Completed",
                                        "New",
                                        "Active"
                                    ],
                                    "DefaultValue": "Active",
                                    "Category": "General"
                                },
                                {
                                    "Name": "NAOption",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "NumberOfRespondents",
                                    "Function": "GetNumberOfRespondentsForCurrentPage()",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "SkipPageOnRespondentsCount",
                                    "DefaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "VisibleToPercentageOfRespondents",
                                    "DafaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "ErrorMessage",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "MatrixType",
                                    "DefaultValue": null,
                                    "Category": "Others"
                                }
                            ],
                            "SubPageTypes": []
                        },
                        {
                            "Name": "MatrixQuestionPage",
                            "DisplayName": "Matrix Question Page",
                            "ID": 2,
                            "QuestionTypes": [
                                {
                                    "Name": "MatrixQuestionSingleResponse",
                                    "DisplayName": "Single Response",
                                    "ID": 6,
                                    "Settings": [
                                        {
                                            "ColumnSettings": [
                                                {
                                                    "Name": "ExcludeFromRandomize",
                                                    "DefaultValue": "False"
                                                },
                                                {
                                                    "Name": "ActiveAnswer",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "Routing",
                                                    "DefaultValue": "GetSetRoutePage()"
                                                },
                                                {
                                                    "Name": "AddPictureOrIcon",
                                                    "DefaultValue": "True"
                                                }
                                            ]
                                        },
                                        {
                                            "RowSettings": [
                                                {
                                                    "Name": "NAOption",
                                                    "DefaultValue": "False"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Name": "MatrixQuestionMultiResponse",
                                    "DisplayName": "Multi Response",
                                    "ID": 7,
                                    "Settings": [
                                        {
                                            "ColumnSettings": [
                                                {
                                                    "Name": "ActiveAnswer",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "AddPictureOrIcon",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "ExcludeFromRandomize",
                                                    "DefaultValue": "False"
                                                },
                                                {
                                                    "Name": "Routing",
                                                    "DefaultValue": "GetSetRoutePage()"
                                                }
                                            ]
                                        },
                                        {
                                            "RowSettings": [
                                                {
                                                    "Name": "NAOption",
                                                    "DefaultValue": "False"
                                                },
                                                {
                                                    "Name": "MinimumOptionAnswerSelection"
                                                },
                                                {
                                                    "Name": "MaximumOptionAnswerSelection"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Name": "MatrixQuestionXPointScale",
                                    "DisplayName": "X Point Scale",
                                    "ID": 8,
                                    "Settings": [
                                        {
                                            "ColumnSettings": []
                                        },
                                        {
                                            "RowSettings": [
                                                {
                                                    "Name": "LowestScaleNumber",
                                                    "DefaultValue": "0"
                                                },
                                                {
                                                    "Name": "HighestScaleNumber",
                                                    "DefaultValue": "10"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "PageSettings": [
                                {
                                    "Name": "Active",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "View",
                                    "DefaultValue": "Slider",
                                    "Function": "GetView()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowProgressBar",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "AutoProcess",
                                    "DefaultVaule": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Routing",
                                    "DefaultValue": "GetSetRoutePage()",
                                    "Function": "GetAvailablePagesGreaterThanCurrentInQuestionnaire()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowNextButton",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowPreviousButton",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Required",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Status",
                                    "Function": "GetStatus()",
                                    "AvailableValues": [
                                        "Completed",
                                        "Partially Completed",
                                        "New",
                                        "Active"
                                    ],
                                    "DefaultValue": "Active",
                                    "Category": "General"
                                },
                                {
                                    "Name": "NAOption",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "NumberOfRespondents",
                                    "Function": "GetNumberOfRespondentsForCurrentPage()",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "SkipPageOnRespondentsCount",
                                    "DefaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "VisibleToPercentageOfRespondents",
                                    "DafaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "ErrorMessage",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "MatrixType",
                                    "DefaultValue": null,
                                    "Category": "Others"
                                }
                            ],
                            "SubPageTypes": []
                        },
                        {
                            "Name": "InputFormPage",
                            "DisplayName": "Input Form Page",
                            "ID": 3,
                            "PageSettings": [
                                {
                                    "Name": "Active",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "View",
                                    "DefaultValue": "Slider",
                                    "Function": "GetView()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowProgressBar",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "AutoProcess",
                                    "DefaultVaule": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Routing",
                                    "DefaultValue": "GetSetRoutePage()",
                                    "Function": "GetAvailablePagesGreaterThanCurrentInQuestionnaire()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowNextButton",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowPreviousButton",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Required",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Status",
                                    "Function": "GetStatus()",
                                    "AvailableValues": [
                                        "Completed",
                                        "Partially Completed",
                                        "New",
                                        "Active"
                                    ],
                                    "DefaultValue": "Active",
                                    "Category": "General"
                                },
                                {
                                    "Name": "NAOption",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "NumberOfRespondents",
                                    "Function": "GetNumberOfRespondentsForCurrentPage()",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "SkipPageOnRespondentsCount",
                                    "DefaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "VisibleToPercentageOfRespondents",
                                    "DafaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "ErrorMessage",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "MatrixType",
                                    "DefaultValue": null,
                                    "Category": "Others"
                                }
                            ],
                            "QuestionTypes": [],
                            "SubPageTypes": []
                        },
                        {
                            "Name": "SummaryPage",
                            "DisplayName": "Summary Page",
                            "ID": 4,
                            "PageSettings": [
                                {
                                    "Name": "Active",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "View",
                                    "DefaultValue": "Slider",
                                    "Function": "GetView()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowProgressBar",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "AutoProcess",
                                    "DefaultVaule": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Routing",
                                    "DefaultValue": "GetSetRoutePage()",
                                    "Function": "GetAvailablePagesGreaterThanCurrentInQuestionnaire()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowNextButton",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowPreviousButton",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Required",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Status",
                                    "Function": "GetStatus()",
                                    "AvailableValues": [
                                        "Completed",
                                        "Partially Completed",
                                        "New",
                                        "Active"
                                    ],
                                    "DefaultValue": "Active",
                                    "Category": "General"
                                },
                                {
                                    "Name": "NAOption",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "NumberOfRespondents",
                                    "Function": "GetNumberOfRespondentsForCurrentPage()",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "SkipPageOnRespondentsCount",
                                    "DefaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "VisibleToPercentageOfRespondents",
                                    "DafaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "ErrorMessage",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "MatrixType",
                                    "DefaultValue": null,
                                    "Category": "Others"
                                }
                            ],
                            "QuestionTypes": [],
                            "SubPageTypes": []
                        },
                        {
                            "Name": "VOCKPI",
                            "DisplayName": "VOC - KPI",
                            "ID": 6,
                            "QuestionTypes": [
                                {
                                    "Name": "NetPromoterScore",
                                    "DisplayName": "Net Promoter Score (NPS)",
                                    "ID": 11,
                                    "Settings": [
                                        {
                                            "AnswerSettings": []
                                        },
                                        {
                                            "QuestionSettings": [
                                                {
                                                    "Name": "CategoryColor",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "KPIType",
                                                    "DefaultValue": "NPS"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Name": "CustomerSupportScore",
                                    "DisplayName": "Customer Support Score",
                                    "ID": 12,
                                    "Settings": [
                                        {
                                            "AnswerSettings": []
                                        },
                                        {
                                            "QuestionSettings": [
                                                {
                                                    "Name": "CategoryColor",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "KPIType",
                                                    "DefaultValue": "NPS"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Name": "CustomerSatisfactionScore",
                                    "DisplayName": "Customer Satisfaction Score",
                                    "ID": 13,
                                    "Settings": [
                                        {
                                            "QuestionSettings": [
                                                {
                                                    "Name": "CategoryColor",
                                                    "DefaultValue": "True"
                                                },
                                                {
                                                    "Name": "KPIType",
                                                    "DefaultValue": "NPS"
                                                }
                                            ]
                                        },
                                        {
                                            "AnswerSettings": []
                                        }
                                    ]
                                }
                            ],
                            "PageSettings": [
                                {
                                    "Name": "Active",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "View",
                                    "DefaultValue": "Slider",
                                    "Function": "GetView()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowProgressBar",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "AutoProcess",
                                    "DefaultVaule": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Routing",
                                    "DefaultValue": "GetSetRoutePage()",
                                    "Function": "GetAvailablePagesGreaterThanCurrentInQuestionnaire()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowNextButton",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowPreviousButton",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Required",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Status",
                                    "Function": "GetStatus()",
                                    "AvailableValues": [
                                        "Completed",
                                        "Partially Completed",
                                        "New",
                                        "Active"
                                    ],
                                    "DefaultValue": "Active",
                                    "Category": "General"
                                },
                                {
                                    "Name": "NAOption",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "NumberOfRespondents",
                                    "Function": "GetNumberOfRespondentsForCurrentPage()",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "SkipPageOnRespondentsCount",
                                    "DefaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "VisibleToPercentageOfRespondents",
                                    "DafaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "ErrorMessage",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "MatrixType",
                                    "DefaultValue": null,
                                    "Category": "Others"
                                }
                            ],
                            "SubPageTypes": []
                        },
                        {
                            "Name": "VOCRootCause",
                            "DisplayName": "VOC - Root Cause",
                            "ID": 7,
                            "QuestionTypes": [
                                {
                                    "Name": "RootCause",
                                    "DisplayName": "Root Cause",
                                    "ID": 13,
                                    "Settings": [
                                        {
                                            "AnswerSettings": [
                                                {
                                                    "Name": "ExcludeFromRandomize",
                                                    "DefaultValue": "False"
                                                },
                                                {
                                                    "Name": "ActiveAnswer"
                                                },
                                                {
                                                    "Name": "Routing",
                                                    "Function": "GetSetRoutePage()"
                                                },
                                                {
                                                    "Name": "AddPictureOrIcon"
                                                }
                                            ]
                                        },
                                        {
                                            "QuestionSettings": [
                                                {
                                                    "Name": "RandomizeAnswer",
                                                    "DefaultValue": "False"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "PageSettings": [
                                {
                                    "Name": "Active",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "View",
                                    "DefaultValue": "Slider",
                                    "Function": "GetView()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowProgressBar",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "AutoProcess",
                                    "DefaultVaule": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Routing",
                                    "DefaultValue": "GetSetRoutePage()",
                                    "Function": "GetAvailablePagesGreaterThanCurrentInQuestionnaire()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowNextButton",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowPreviousButton",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Required",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Status",
                                    "Function": "GetStatus()",
                                    "AvailableValues": [
                                        "Completed",
                                        "Partially Completed",
                                        "New",
                                        "Active"
                                    ],
                                    "DefaultValue": "Active",
                                    "Category": "General"
                                },
                                {
                                    "Name": "NAOption",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "NumberOfRespondents",
                                    "Function": "GetNumberOfRespondentsForCurrentPage()",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "SkipPageOnRespondentsCount",
                                    "DefaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "VisibleToPercentageOfRespondents",
                                    "DafaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "ErrorMessage",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "MatrixType",
                                    "DefaultValue": null,
                                    "Category": "Others"
                                }
                            ],
                            "SubPageTypes": []
                        },
                        {
                            "Name": "SystemPage",
                            "DisplayName": "System Page",
                            "ID": 5,
                            "SubPageTypes": [
                                {
                                    "Name": "InformationPage",
                                    "DisplayName": "Information Page",
                                    "ID": 1
                                },
                                {
                                    "Name": "CompletedPage",
                                    "DisplayName": "Completed Page",
                                    "ID": 2
                                },
                                {
                                    "Name": "TimeElapsedPage",
                                    "DisplayName": "Time Elapsed Page",
                                    "ID": 3
                                },
                                {
                                    "Name": "GroupingPage",
                                    "DisplayName": "Grouping Page",
                                    "ID": 4
                                }
                            ],
                            "PageSettings": [
                                {
                                    "Name": "Active",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "View",
                                    "DefaultValue": "Slider",
                                    "Function": "GetView()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowProgressBar",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "AutoProcess",
                                    "DefaultVaule": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Routing",
                                    "DefaultValue": "GetSetRoutePage()",
                                    "Function": "GetAvailablePagesGreaterThanCurrentInQuestionnaire()",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowNextButton",
                                    "Defaultvalue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "ShowPreviousButton",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Required",
                                    "DefaultValue": "True",
                                    "Category": "General"
                                },
                                {
                                    "Name": "Status",
                                    "Function": "GetStatus()",
                                    "AvailableValues": [
                                        "Completed",
                                        "Partially Completed",
                                        "New",
                                        "Active"
                                    ],
                                    "DefaultValue": "Active",
                                    "Category": "General"
                                },
                                {
                                    "Name": "NAOption",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "NumberOfRespondents",
                                    "Function": "GetNumberOfRespondentsForCurrentPage()",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "SkipPageOnRespondentsCount",
                                    "DefaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "VisibleToPercentageOfRespondents",
                                    "DafaultValue": 0,
                                    "Category": "Others"
                                },
                                {
                                    "Name": "ErrorMessage",
                                    "DefaultValue": "False",
                                    "Category": "Others"
                                },
                                {
                                    "Name": "MatrixType",
                                    "DefaultValue": null,
                                    "Category": "Others"
                                }
                            ],
                            "QuestionTypes": []
                        }
                    ],
                    "Modes": [
                        {
                            "Name": "Online",
                            "ID": 1,
                            "Status": "true"
                        },
                        {
                            "Name": "Offline",
                            "ID": 2,
                            "Status": "true"
                        },
                        {
                            "Name": "SMS",
                            "ID": 3,
                            "Status": "false"
                        },
                        {
                            "Name": "FeedbackWidget",
                            "ID": 4,
                            "Status": "false"
                        }
                    ],
                    "Scoring": {
                        "IsScoringAvailable": "true"
                    }
                }
            ]
        }
    ]
};
