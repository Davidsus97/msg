import React from "react";

import { getData, setData, signIn } from "./firebase";

const MyInput = (props) => {
  const [value, setValue] = React.useState("");
  const path = "users/" + props.uid + "/draft";
  React.useEffect(() => {
    getData(path).then((val) => {
      setValue(val);
    });
  }, [path]);

  return (
    <input
      value={value}
      onChange={(e) => {
        const newValue = e.target.value;
        setValue(newValue);
        setData(path, newValue);
      }}
    />
  );
};

export const App = () => {
  const [uid, setUid] = React.useState("");
  if (uid === "") {
    return (
      <button
        onClick={() => {
          signIn().then((newUid) => {
            setUid(newUid);
          });
        }}
      >
        sign in
      </button>
    );
  }
  return (
    <div>
      <MyInput uid={uid} />
    </div>
  );
};

export default App;

