const path = require('path');
const fse = require('fs-extra');

const tools = require('simple-svg-tools');

const sourceDir = "./icons";
const targetDir = "./scripts";
const tmp_json_file = "extracted_svg.json";

extractSVG = (folderName, convertSVGToJSON, parseJSON) => {
    tools.ImportDir(folderName, {
        'include-subdirs': true,
        ignoreDuplicates: false,
        keywordCallback: (file, filename) => path.dirname(filename) !== "." ? `${path.dirname(filename)}-${file}` : file
    }).then((data) => {
        console.log(`Extracting SVG into collection ...`);
        convertSVGToJSON(data, parseJSON);
    }).catch(err => {
        console.error(err);
    });
}

convertSVGToJSON = (data, parseJSON) => {
    tools.ExportJSON(data, tmp_json_file).then((json) => {
        console.log(`Exported collection successfully to JSON`);
        parseJSON(json);
    }).catch(err => {
        console.error(err);
    });
}

template = (key, obj) => {
    let className = key.toLowerCase().replace(/[^0-9a-z]/gi, ' ').split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join('');
    let { body, width, height } = obj;

    return `
        import React from "react";
        import withSVG from "./withSVG";

        const ${className} = () => (
            ${body}
        );

        export default withSVG(${className}, ${width}, ${height}, '25px', '25px');
    `;
}

parseJSON = (json) => {
    const jsonStr = JSON.stringify(json);
    const data = JSON.parse(jsonStr);



    Object.keys(data.icons).forEach((key)=>{

        let targetFile = path.join(targetDir, `${key}.js`);
        let content = template(key, data.icons[key]);
   
        fse.outputFile(targetFile, content)
        .then(() => {
            console.log(`The file ${key}.json was written successfully`);
        })
        .catch(err => {
            console.error(`error writing file: ${key}.json`, err);
        });
    })
}

extractSVG(sourceDir, convertSVGToJSON, parseJSON);