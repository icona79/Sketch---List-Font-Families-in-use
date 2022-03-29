var onRun = function(context) {
    const sketch = require("sketch");
    const { message } = require("sketch/ui");
    const document = sketch.getSelectedDocument();
    let textStyles = document.sharedTextStyles;
    let fonts = [];

    //console.log(textStyles);
    for (i = 0; i < textStyles.length; i++) {
        let fontFamily = textStyles[i].style.fontFamily;
        //console.log(textStyles[i].style.fontFamily);
        if (fonts.length > 0) {
            if (fonts.indexOf(fontFamily) !== -1) {} else {
                fonts.push(fontFamily);
            }
        } else {
            fonts.push(fontFamily);
        }
    }

    if (fonts.length > 0) {
        let json = JSON.stringify(fonts, null, 1);

        let pasteboard = NSPasteboard.generalPasteboard();
        pasteboard.clearContents();
        pasteboard.setString_forType(json, NSPasteboardTypeString);

        message("📋 Data copied to clipboard.");
    } else {
        message("☝️ No font families found.");
    }
};