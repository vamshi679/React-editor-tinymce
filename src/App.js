import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./App.css";

function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <div style={{margin: '20px'}}>
        <Editor
          apiKey="8xtfbb6vz207z8o424ky147j3ruzb89vt1jav4hj5ktldqhy"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: true,
            skin: 'oxide',
            plugins: [
              "ai preview powerpaste casechange footnotes tinycomments searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed advtemplate codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker mergetags a11ychecker editimage help formatpainter permanentpen pageembed charmap quickbars linkchecker emoticons advtable export mentions typography markdown importword",
            ],
            toolbar:
              "undo redo | importword | aidialog aishortcuts | blocks fontsizeinput | bold italic | align numlist bullist | link image | table media pageembed | lineheight  outdent indent | strikethrough forecolor backcolor formatpainter removeformat | charmap emoticons checklist | code fullscreen preview | save print export | pagebreak anchor codesample footnotes mergetags | addtemplate inserttemplate | addcomment showcomments | ltr rtl casechange | spellcheckdialog a11ycheck",
            importword_service_url: "add.url.here",
            templates: [],
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
      
      <div style={{textAlign: 'center'}}>
        <button onClick={log}>Log editor content</button>
      </div>
    </>
  );
}

export default App;