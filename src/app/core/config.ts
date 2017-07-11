// @todo: Delete this file when we have config API in place
export const config = {
    "Projects": {
        "DefaultProject": {
            "Name": "Default",
            "ID": 1,
            "QuestionnaireTypes": {
                "ExpertMode": {
                    "DisplayName": "Expert Mode",
                    "ID": 1,
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
                                            "CreateOtherCategory": null
                                        },
                                        "AnswerSettings": null
                                    }
                                },
                                "SingleQuestionMultiResponse": null,
                                "SingleQuestionXPointScale": null,
                                "SingleQuestionComment": null,
                                "SingleQuestionMediaRecording": null
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
                                "MatrixQuestionSingleResponse": null,
                                "MatrixQuestionMultiResponse": null,
                                "MatrixQuestionXPointScale": null
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
                                "MatrixType": null,
                                "NoOfRespondent": null,
                                "SkipPageOnRespondentCount": null,
                                "VisibleToPercentageOfRespondent": null,
                                "ErrorMessage": null
                            }
                        },
                        "InputForm": {
                            "Name": "InputFormPage",
                            "DisplayName": "Input Form Page",
                            "ID": 3,
                            "QuestionTypes": null,
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
                            "QuestionTypes": null,
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
                        "SystemPage": {
                            "Name": "SystemPage",
                            "DisplayName": "System Page",
                            "ID": 5,
                            "SubPageTypes": {
                                "InformationPage": null,
                                "CompletedPage": null,
                                "TimeElapsedPage": null,
                                "GroupingPage": null
                            },
                            "PageSettings": null
                        },
                        "VOC-KPI": {
                            "Name": "VOCKPI",
                            "DisplayName": "VOC - KPI",
                            "ID": 6,
                            "QuestionTypes": {
                                "NetPromoterScore": null,
                                "CustomerSupportScore": null,
                                "CustomerSatisfactionScore": null
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
                                "VOCRootCause": null
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
                        }

                    },
                    "VOC": null,
                    "VOE": null,
                    "Audit": null
                }
            }
        },
        "GeneralSettings": null
    }
};
