{
    "interactionModel": {
        "languageModel": {
            "invocationName": "bigelow",
            "intents": [
                {
                    "name": "AMAZON.FallbackIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.NavigateHomeIntent",
                    "samples": []
                },
                {
                    "name": "UpdateBWord",
                    "slots": [
                        {
                            "name": "User",
                            "type": "AMAZON.FirstName",
                            "samples": [
                                "{User}"
                            ]
                        },
                        {
                            "name": "Bword",
                            "type": "AMAZON.Animal"
                        }
                    ],
                    "samples": [
                        "set word to {Bword}",
                        "set word for {User} to {Bword}",
                        "set word for {User}"
                    ]
                }
            ],
            "types": []
        },
        "dialog": {
            "intents": [
                {
                    "name": "UpdateBWord",
                    "confirmationRequired": false,
                    "prompts": {},
                    "slots": [
                        {
                            "name": "User",
                            "type": "AMAZON.FirstName",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.1559442140391.1197546210435"
                            },
                            "validations": [
                                {
                                    "type": "isInSet",
                                    "prompt": "Slot.Validation.87513082740.749009261655.1450552471693",
                                    "values": [
                                        "Blake",
                                        "John",
                                        "Scott",
                                        "Evan"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Bword",
                            "type": "AMAZON.Animal",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.87513082740.1012534062730"
                            }
                        }
                    ]
                }
            ],
            "delegationStrategy": "ALWAYS"
        },
        "prompts": [
            {
                "id": "Slot.Validation.87513082740.749009261655.1450552471693",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "Acceptable users are Blake, Scott, John and Evan"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.87513082740.1012534062730",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "What word would you like to set for {User}"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.1559442140391.1197546210435",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "Whose word should i set to {Bword}"
                    }
                ]
            }
        ]
    }
}