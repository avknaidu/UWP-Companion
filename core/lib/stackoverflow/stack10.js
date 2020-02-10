import StackOverflowParser from './parsing.js';

function getProtocolFromUrl(url) {
    let protocol = "";

    if  (StackOverflowParser.isStackOverflow(url)) {
        protocol = "stack10://?LaunchContext=OpenType&InfoType=questions";
}

    if  (StackOverflowParser.isStackOverflow(url) != null & StackOverflowParser.hasQuestion(url) !=null) {
            protocol = "stack10://?LaunchContext=OpenQuestion&QuestionID=" + StackOverflowParser.hasQuestion(url) + "&SiteName=stackoverflow";
    }

    return protocol;
}

export default {
    config: {
        color: "#1ED760",
        appProtocol: "stack10"
    },
    name: "Stack10",
    parseUrl: getProtocolFromUrl
}