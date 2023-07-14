*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Open details page from the list
    Open Browser    http://localhost:4200    chrome
    Wait Until Page Contains Element    id=item_1
    Click Link    id=item_1
    Wait Until Page Contains    types: grass,poison   