// @todo: Delete this file when we have config API in place
export const config = {
    "Name": "Default",
    "ID": 1,
    "QuestionnaireTypes": [{
        "DisplayName": "Expert Mode",
        "ID": 1,
        "PageTypes": [{
            "Name": "SingleQuestionPage",
            "DisplayName": "Single Question Page",
            "ID": 1,
            "QuestionTypes": [
                {
                    "Name": "SingleQuestionSingleResponse",
                    "DisplayName": "Single Response",
                    "ID": 1,
                    "Settings": {
                        "QuestionSettings": {
                            "RandomizeAnswers": null,
                            "CreateOtherCategory": {
                                "DefaultValue": "False"
                            }
                        },
                        "AnswerSettings": {
                            "ExcludeFromRandomize": {
                                "DefaultValue": "False"
                            },
                            "ActiveAnswer": null,
                            "Routing": {
                                "Function": "GetSetRoutePage()"
                            },
                            "AddPictureOrIcon": null
                        }
                    }
                },
                {
                    "Name": "SingleQuestionMultiResponse",
                    "DisplayName": "Multi Response",
                    "ID": 2,
                    "Settings": {
                        "QuestionSettings": {
                            "RandomizeAnswers": null,
                            "CreateOtherCategory": {
                                "DefaultValue": "False"
                            },
                            "MinimumAnswerOptionSelection": {
                                "DefaultValue": "2"
                            },
                            "MaximumAnswerOptionSelection": {
                                "DefaultValue": "2"
                            }
                        },
                        "AnswerSettings": {
                            "ExcludeFromRandomize": {
                                "DefaultValue": "False"
                            },
                            "ActiveAnswer": null,
                            "Routing": {
                                "Function": "GetSetRoutePage()"
                            },
                            "AddPictureOrIcon": null
                        }
                    }
                },
                {
                    "Name": "SingleQuestionXPointScale",
                    "DisplayName": "X Point Scale",
                    "ID": 3,
                    "Settings": {
                        "QuestionSettings": {
                            "LowestScaleNumber": {
                                "DefaultValue": "0"
                            },
                            "HighestScaleNumber": {
                                "DefaultValue": "10"
                            }
                        }
                    }
                },
                {
                    "Name": "SingleQuestionComment",
                    "DisplayName": "Comment Type",
                    "ID": 4,
                    "Settings": {
                        "QuestionSettings": {
                            "HTMLEditor": {
                                "DefaultValue": "False"
                            },
                            "MaximumNumberOfCharacters": {
                                "DefaultValue": "1000"
                            },
                            "MinimumNumberOfCharacters": {
                                "DefaultValue": "1"
                            }
                        }
                    }
                },
                {
                    "Name": "SingleQuestionMediaRecording",
                    "DisplayName": "Media Recording",
                    "ID": 5,
                    "Settings": {
                        "ModeSettings": {
                            "AudioMode": {
                                "DefaultValue": "True"
                            },
                            "VideoMode": {
                                "DefaultValue": "True"
                            },
                            "PhotoMode": {
                                "DefaultValue": "True"
                            }
                        },
                        "AudioSettings": {
                            "RecordComputerMic": {
                                "DefaultValue": "True"
                            },
                            "RecordPhoneOrTabletMic": {
                                "DefaultValue": "True"
                            },
                            "UploadFile": {
                                "DefaultValue": "True"
                            },
                            "MaximumLengthOfAudio": {
                                "DefaultValue": "300"
                            }
                        },
                        "VideoSettings": {
                            "RecordComputerMic": null,
                            "RecordPhotoOrTabletMic": null,
                            "UploadFile": {
                                "DefaultValue": "True"
                            },
                            "MaximumLengthOfAudio": null
                        },
                        "PhotoSettings": {
                            "CameraWebcam": {
                                "DefaultValue": "True"
                            },
                            "CameraPhoneOrTablet": {
                                "DefaultValue": "True"
                            },
                            "UploadFile": {
                                "DefaultValue": "True"
                            }
                        }
                    }
                }
            ],
            "PageSettings": {
                "Active": null,
                "View": null,
                "ShowProgressBar": null,
                "AutoProceed": null,
                "Routing": null,
                "ShowNextButton": null,
                "ShowPreviousButton": null,
                "Required": null,
                "Status": null,
                "NAOption": null,
                "NoOfRespondent": null,
                "SkipPageOnRespondentCount": null,
                "VisibleToPercentageOfRespondent": null,
                "ErrorMessage": null
            }
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
                        "Settings": {
                            "ColumnSettings": {
                                "ExcludeFromRandomize": {
                                    "DefaultValue": "False"
                                },
                                "ActiveAnswer": {
                                    "DefaultValue": "True"
                                },
                                "Routing": {
                                    "DefaultValue": "GetSetRoutePage()"
                                },
                                "AddPictureOrIcon": {
                                    "DefaultValue": "True"
                                }
                            },
                            "RowSettings": {
                                "NAOption": {
                                    "DefaultValue": "False"
                                }
                            }
                        }
                    },
                    {
                        "Name": "MatrixQuestionMultiResponse",
                        "DisplayName": "Multi Response",
                        "ID": 7,
                        "Settings": {
                            "ColumnSettings": {
                                "ActiveAnswer": {
                                    "DefaultValue": "True"
                                },
                                "AddPictureOrIcon": {
                                    "DefaultValue": "True"
                                },
                                "ExcludeFromRandomize": {
                                    "DefaultValue": "False"
                                },
                                "Routing": {
                                    "DefaultValue": "GetSetRoutePage()"
                                }
                            },
                            "RowSettings": {
                                "NAOption": {
                                    "DefaultValue": "False"
                                },
                                "MinimumOptionAnswerSelection": null,
                                "MaximumOptionAnswerSelection": null
                            }
                        }
                    },
                    {
                        "Name": "MatrixQuestionXPointScale",
                        "DisplayName": "X Point Scale",
                        "ID": 8,
                        "Settings": {
                            "RowSettings": {
                                "LowestScaleNumber": {
                                    "DefaultValue": "0"
                                },
                                "HighestScaleNumber": {
                                    "DefaultValue": "10"
                                }
                            }
                        }
                    }
                ],
                "PageSettings": {
                    "Active": {
                        "Defaultvalue": "False"
                    },
                    "View": null,
                    "ShowProgressBar": null,
                    "AutoProceed": null,
                    "Routing": null,
                    "ShowNextButton": null,
                    "ShowPreviousButton": null,
                    "Required": null,
                    "Status": null,
                    "MatrixType": null,
                    "NoOfRespondent": null,
                    "SkipPageOnRespondentCount": null,
                    "VisibleToPercentageOfRespondent": null,
                    "ErrorMessage": null
                }
            },
            {
                "Name": "InputFormPage",
                "DisplayName": "Input Form Page",
                "ID": 3,
                "PageSettings": {
                    "Active": null,
                    "View": null,
                    "ShowProgressBar": null,
                    "Routing": null,
                    "ShowNextButton": null,
                    "ShowPreviousButton": null,
                    "Required": null,
                    "Status": null,
                    "NoOfRespondent": null,
                    "SkipPageOnRespondentCount": null,
                    "VisibleToPercentageOfRespondent": null,
                    "ErrorMessage": null
                }
            },
            {
                "Name": "SummaryPage",
                "DisplayName": "Summary Page",
                "ID": 4,
                "PageSettings": {
                    "Active": null,
                    "View": null,
                    "ShowProgressBar": null,
                    "Routing": null,
                    "ShowNextButton": null,
                    "ShowPreviousButton": null,
                    "Status": null,
                    "NoOfRespondent": null,
                    "SkipPageOnRespondentCount": null,
                    "VisibleToPercentageOfRespondent": null
                }
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
                        "Settings": {
                            "QuestionSettings": {
                                "CategoryColor": {
                                    "DefaultValue": "True"
                                },
                                "KPIType": {
                                    "DefaultValue": "NPS"
                                }
                            }
                        }
                    },
                    {
                        "Name": "CustomerSupportScore",
                        "DisplayName": "Customer Support Score",
                        "ID": 12,
                        "Settings": {
                            "QuestionSettings": {
                                "CategoryColor": {
                                    "DefaultValue": "True"
                                },
                                "KPIType": {
                                    "DefaultValue": "NPS"
                                }
                            }
                        }
                    },
                    {
                        "Name": "CustomerSatisfactionScore",
                        "DisplayName": "Customer Satisfaction Score",
                        "ID": 13,
                        "Settings": {
                            "QuestionSettings": {
                                "CategoryColor": {
                                    "DefaultValue": "True"
                                },
                                "KPIType": {
                                    "DefaultValue": "NPS"
                                }
                            }
                        }
                    }
                ],
                "PageSettings": {
                    "Active": null,
                    "View": null,
                    "ShowProgressBar": null,
                    "AutoProceed": null,
                    "Routing": null,
                    "ShowNextButton": null,
                    "ShowPreviousButton": null,
                    "Required": null,
                    "Status": null,
                    "NoOfRespondent": null,
                    "SkipPageOnRespondentCount": null,
                    "VisibleToPercentageOfRespondent": null,
                    "ErrorMessage": null
                }
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
                        "Settings": {
                            "QuestionSettings": {
                                "RandomizeAnswer": {
                                    "DefaultValue": "False"
                                }
                            },
                            "AnswerSettings": {
                                "ExcludeFromRandomize": {
                                    "DefaultValue": "False"
                                },
                                "ActiveAnswer": null,
                                "Routing": {
                                    "Function": "GetSetRoutePage()"
                                },
                                "AddPictureOrIcon": null
                            }
                        }
                    }
                ],
                "PageSettings": {
                    "Active": null,
                    "View": null,
                    "ShowProgressBar": null,
                    "AutoProceed": null,
                    "Routing": null,
                    "ShowNextButton": null,
                    "ShowPreviousButton": null,
                    "Required": null,
                    "Status": null,
                    "NoOfRespondent": null,
                    "SkipPageOnRespondentCount": null,
                    "VisibleToPercentageOfRespondent": null,
                    "ErrorMessage": null
                }
            },
            {
                "Name": "SystemPage",
                "DisplayName": "System Page",
                "ID": 5,
                "SubPageTypes": [{
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
                "PageSettings": null
            }
        ],
        "Modes": [{
            "name": "Online"
        },
            {
                "name": "Offline"
            },
            {
                "name": "SMS"
            },
            {
                "name": "FeedbackWidget"
            }
        ],
        "Scoring": {
            "IsScoringAvailable": "True"
        }
    },
        {
            "DisplayName": "VOC",
            "ID": 2,
            "PageTypes": {
                "SingleQuestionPage": {
                    "Name": "SingleQuestionPage",
                    "DisplayName": "Single Question Page",
                    "ID": 1,
                    "QuestionTypes": {
                        "SingleQuestionSingleResponse": {
                            "Name": "SingleQuestionSingleResponse",
                            "DisplayName": "Single Response",
                            "ID": 1,
                            "Settings": {
                                "QuestionSettings": {
                                    "RandomizeAnswers": null,
                                    "CreateOtherCategory": {
                                        "DefaultValue": "False"
                                    }
                                },
                                "AnswerSettings": {
                                    "ExcludeFromRandomize": {
                                        "DefaultValue": "False"
                                    },
                                    "ActiveAnswer": null,
                                    "Routing": {
                                        "Function": "GetSetRoutePage()"
                                    },
                                    "AddPictureOrIcon": null
                                }
                            }
                        },
                        "SingleQuestionMultiResponse": {
                            "Name": "SingleQuestionMultiResponse",
                            "DisplayName": "Multi Response",
                            "ID": 2,
                            "Settings": {
                                "QuestionSettings": {
                                    "RandomizeAnswers": null,
                                    "CreateOtherCategory": {
                                        "DefaultValue": "False"
                                    },
                                    "MinimumAnswerOptionSelection": {
                                        "DefaultValue": "2"
                                    },
                                    "MaximumAnswerOptionSelection": {
                                        "DefaultValue": "2"
                                    }
                                },
                                "AnswerSettings": {
                                    "ExcludeFromRandomize": {
                                        "DefaultValue": "False"
                                    },
                                    "ActiveAnswer": null,
                                    "Routing": {
                                        "Function": "GetSetRoutePage()"
                                    },
                                    "AddPictureOrIcon": null
                                }
                            }
                        },
                        "SingleQuestionXPointScale": {
                            "Name": "SingleQuestionXPointScale",
                            "DisplayName": "X Point Scale",
                            "ID": 3,
                            "Settings": {
                                "QuestionSettings": {
                                    "LowestScaleNumber": {
                                        "DefaultValue": "0"
                                    },
                                    "HighestScaleNumber": {
                                        "DefaultValue": "10"
                                    }
                                }
                            }
                        },
                        "SingleQuestionComment": {
                            "Name": "SingleQuestionComment",
                            "DisplayName": "Comment Type",
                            "ID": 4,
                            "Settings": {
                                "QuestionSettings": {
                                    "HTMLEditor": {
                                        "DefaultValue": "False"
                                    },
                                    "MaximumNumberOfCharacters": {
                                        "DefaultValue": "1000"
                                    },
                                    "MinimumNumberOfCharacters": {
                                        "DefaultValue": "1"
                                    }
                                }
                            }
                        },
                        "SingleQuestionMediaRecording": {
                            "Name": "SingleQuestionMediaRecording",
                            "DisplayName": "Media Recording",
                            "ID": 5,
                            "Settings": {
                                "ModeSettings": {
                                    "AudioMode": {
                                        "DefaultValue": "True"
                                    },
                                    "VideoMode": {
                                        "DefaultValue": "True"
                                    },
                                    "PhotoMode": {
                                        "DefaultValue": "True"
                                    }
                                },
                                "AudioSettings": {
                                    "RecordComputerMic": {
                                        "DefaultValue": "True"
                                    },
                                    "RecordPhoneOrTabletMic": {
                                        "DefaultValue": "True"
                                    },
                                    "UploadFile": {
                                        "DefaultValue": "True"
                                    },
                                    "MaximumLengthOfAudio": {
                                        "DefaultValue": "300"
                                    }
                                },
                                "VideoSettings": {
                                    "RecordComputerMic": null,
                                    "RecordPhotoOrTabletMic": null,
                                    "UploadFile": {
                                        "DefaultValue": "True"
                                    },
                                    "MaximumLengthOfAudio": null
                                },
                                "PhotoSettings": {
                                    "CameraWebcam": {
                                        "DefaultValue": "True"
                                    },
                                    "CameraPhoneOrTablet": {
                                        "DefaultValue": "True"
                                    },
                                    "UploadFile": {
                                        "DefaultValue": "True"
                                    }
                                }
                            }
                        }
                    },
                    "PageSettings": {
                        "Active": null,
                        "View": null,
                        "ShowProgressBar": null,
                        "AutoProceed": null,
                        "Routing": null,
                        "ShowNextButton": null,
                        "ShowPreviousButton": null,
                        "Required": null,
                        "Status": null,
                        "NAOption": null,
                        "NoOfRespondent": null,
                        "SkipPageOnRespondentCount": null,
                        "VisibleToPercentageOfRespondent": null,
                        "ErrorMessage": null
                    }
                },
                "MatrixQuestion": {
                    "Name": "MatrixQuestionPage",
                    "DisplayName": "Matrix Question Page",
                    "ID": 2,
                    "QuestionTypes": {
                        "MatrixQuestionSingleResponse": {
                            "Name": "MatrixQuestionSingleResponse",
                            "DisplayName": "Single Response",
                            "ID": 6,
                            "Settings": {
                                "ColumnSettings": {
                                    "ExcludeFromRandomize": {
                                        "DefaultValue": "False"
                                    },
                                    "ActiveAnswer": {
                                        "DefaultValue": "True"
                                    },
                                    "Routing": {
                                        "DefaultValue": "GetSetRoutePage()"
                                    },
                                    "AddPictureOrIcon": {
                                        "DefaultValue": "True"
                                    }
                                },
                                "RowSettings": {
                                    "NAOption": {
                                        "DefaultValue": "False"
                                    }
                                }
                            }
                        },
                        "MatrixQuestionMultiResponse": {
                            "Name": "MatrixQuestionMultiResponse",
                            "DisplayName": "Multi Response",
                            "ID": 7,
                            "Settings": {
                                "ColumnSettings": {
                                    "ActiveAnswer": {
                                        "DefaultValue": "True"
                                    },
                                    "AddPictureOrIcon": {
                                        "DefaultValue": "True"
                                    },
                                    "ExcludeFromRandomize": {
                                        "DefaultValue": "False"
                                    },
                                    "Routing": {
                                        "DefaultValue": "GetSetRoutePage()"
                                    }
                                },
                                "RowSettings": {
                                    "NAOption": {
                                        "DefaultValue": "False"
                                    },
                                    "MinimumOptionAnswerSelection": null,
                                    "MaximumOptionAnswerSelection": null
                                }
                            }
                        },
                        "MatrixQuestionXPointScale": {
                            "Name": "MatrixQuestionXPointScale",
                            "DisplayName": "X Point Scale",
                            "ID": 8,
                            "Settings": {
                                "RowSettings": {
                                    "LowestScaleNumber": {
                                        "DefaultValue": "0"
                                    },
                                    "HighestScaleNumber": {
                                        "DefaultValue": "10"
                                    }
                                }
                            }
                        }
                    },
                    "PageSettings": {
                        "Active": {
                            "Defaultvalue": "False"
                        },
                        "View": null,
                        "ShowProgressBar": null,
                        "AutoProceed": null,
                        "Routing": null,
                        "ShowNextButton": null,
                        "ShowPreviousButton": null,
                        "Required": null,
                        "Status": null,
                        "MatrixType": null,
                        "NoOfRespondent": null,
                        "SkipPageOnRespondentCount": null,
                        "VisibleToPercentageOfRespondent": null,
                        "ErrorMessage": null
                    }
                },
                "InputFormPage": {
                    "Name": "InputFormPage",
                    "DisplayName": "Input Form Page",
                    "ID": 3,
                    "PageSettings": {
                        "Active": null,
                        "View": null,
                        "ShowProgressBar": null,
                        "Routing": null,
                        "ShowNextButton": null,
                        "ShowPreviousButton": null,
                        "Required": null,
                        "Status": null,
                        "NoOfRespondent": null,
                        "SkipPageOnRespondentCount": null,
                        "VisibleToPercentageOfRespondent": null,
                        "ErrorMessage": null
                    }
                },
                "Summary": {
                    "Name": "SummaryPage",
                    "DisplayName": "Summary Page",
                    "ID": 4,
                    "PageSettings": {
                        "Active": null,
                        "View": null,
                        "ShowProgressBar": null,
                        "Routing": null,
                        "ShowNextButton": null,
                        "ShowPreviousButton": null,
                        "Status": null,
                        "NoOfRespondent": null,
                        "SkipPageOnRespondentCount": null,
                        "VisibleToPercentageOfRespondent": null
                    }
                },
                "VOC-KPI": {
                    "Name": "VOCKPI",
                    "DisplayName": "VOC - KPI",
                    "ID": 6,
                    "QuestionTypes": {
                        "NetPromoterScore": {
                            "Name": "NetPromoterScore",
                            "DisplayName": "Net Promoter Score (NPS)",
                            "ID": 11,
                            "Settings": {
                                "QuestionSettings": {
                                    "CategoryColor": {
                                        "DefaultValue": "True"
                                    },
                                    "KPIType": {
                                        "DefaultValue": "NPS"
                                    }
                                }
                            }
                        },
                        "CustomerSupportScore": {
                            "Name": "CustomerSupportScore",
                            "DisplayName": "Customer Support Score",
                            "ID": 12,
                            "Settings": {
                                "QuestionSettings": {
                                    "CategoryColor": {
                                        "DefaultValue": "True"
                                    },
                                    "KPIType": {
                                        "DefaultValue": "NPS"
                                    }
                                }
                            }
                        },
                        "CustomerSatisfactionScore": {
                            "Name": "CustomerSatisfactionScore",
                            "DisplayName": "Customer Satisfaction Score",
                            "ID": 13,
                            "Settings": {
                                "QuestionSettings": {
                                    "CategoryColor": {
                                        "DefaultValue": "True"
                                    },
                                    "KPIType": {
                                        "DefaultValue": "NPS"
                                    }
                                }
                            }
                        }
                    },
                    "PageSettings": {
                        "Active": null,
                        "View": null,
                        "ShowProgressBar": null,
                        "AutoProceed": null,
                        "Routing": null,
                        "ShowNextButton": null,
                        "ShowPreviousButton": null,
                        "Required": null,
                        "Status": null,
                        "NoOfRespondent": null,
                        "SkipPageOnRespondentCount": null,
                        "VisibleToPercentageOfRespondent": null,
                        "ErrorMessage": null
                    }
                },
                "VOC-RootCause": {
                    "Name": "VOCRootCause",
                    "DisplayName": "VOC - Root Cause",
                    "ID": 7,
                    "QuestionTypes": {
                        "VOCRootCause": {
                            "Name": "RootCause",
                            "DisplayName": "Root Cause",
                            "ID": 13,
                            "Settings": {
                                "QuestionSettings": {
                                    "RandomizeAnswer": {
                                        "DefaultValue": "False"
                                    }
                                },
                                "AnswerSettings": {
                                    "ExcludeFromRandomize": {
                                        "DefaultValue": "False"
                                    },
                                    "ActiveAnswer": null,
                                    "Routing": {
                                        "Function": "GetSetRoutePage()"
                                    },
                                    "AddPictureOrIcon": null
                                }
                            }
                        }
                    },
                    "PageSettings": {
                        "Active": null,
                        "View": null,
                        "ShowProgressBar": null,
                        "AutoProceed": null,
                        "Routing": null,
                        "ShowNextButton": null,
                        "ShowPreviousButton": null,
                        "Required": null,
                        "Status": null,
                        "NoOfRespondent": null,
                        "SkipPageOnRespondentCount": null,
                        "VisibleToPercentageOfRespondent": null,
                        "ErrorMessage": null
                    }
                },
                "SystemPage": {
                    "Name": "SystemPage",
                    "DisplayName": "System Page",
                    "ID": 5,
                    "SubPageTypes": {
                        "InformationPage": {
                            "Name": "InformationPage",
                            "DisplayName": "Information Page",
                            "ID": 1
                        },
                        "CompletedPage": {
                            "Name": "CompletedPage",
                            "DisplayName": "Completed Page",
                            "ID": 2
                        },
                        "TimeElapsedPage": {
                            "Name": "TimeElapsedPage",
                            "DisplayName": "Time Elapsed Page",
                            "ID": 3
                        },
                        "GroupingPage": {
                            "Name": "GroupingPage",
                            "DisplayName": "Grouping Page",
                            "ID": 4
                        }
                    },
                    "PageSettings": null
                }
            },
            "Modes": [{
                "name": "Online"
            },
                {
                    "name": "Offline"
                },
                {
                    "name": "SMS"
                }
            ]
        }
    ]
};
