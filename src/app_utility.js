export function getActiveUser() {
    var activeUser = {
        "SessionId": "",
        "SessionEnd": "",
        "SessionRole": ""
    };

    fetch("http://localhost:5000/Account/TransferSessionInformation/")
        .then(response => response.json())
        .then(
            (result) => {
                this.activeUser.SessionId = result.SessionId;
                alert("1 = " + JSON.stringify(result));
            },
            (error) => {
                activeUser["SessionId"] = error;
            }
    );
    alert("3 = " + JSON.stringify(this.activeUser));
    return activeUser;
}