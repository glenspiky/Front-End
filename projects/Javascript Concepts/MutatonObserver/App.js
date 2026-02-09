const myList = document.querySelector(".summary");

/*
  1.Making a new mutation observer
  2.Tell it what to observe
  3.What to do with the observed changes
*/

const observer = new MutationObserver((mutations) => {
  mutations.forEach((record) => {
    // console.log(record);

    // if (record.type === "attributes") {
    //   const changedAttributeName = record.attributeName;
    //   const newValue = record.target.getAttribute(changedAttributeName);
    //   console.log(
    //     `Attribute changed! New value for ${changedAttributeName} : ${newValue}`,
    //   );
    // }

    // if (record.addedNodes.length > 0) {
    //   console.log(`Number of nodes added: ${record.addedNodes.length}`);
    // }
    // if (record.removedNodes.length > 0) {
    //   console.log(`Number of nodes removed: ${record.removedNodes.length}`);
    // }
    if (
      record.addedNodes.length === 1 &&
      record.addedNodes[0].nodeType === Node.TEXT_NODE &&
      record.removedNodes.length === 1 &&
      record.removedNodes[0].nodeType === Node.TEXT_NODE
    ) {
      console.log(
        `Text changed from ${record.removedNodes[0].nodeValue} to ${record.removedNodes[0].nodeValue}`,
      );
    }
    console.log(record);
  });
});
//observer.observe(myList,{})
observer.observe(myList.firstElementChild, {
  // attributes: true,
  // attributeFilter: ["class"],
  // attributeOldValue:true

  childList: true,
});

setTimeout(() => {
  //attributes
  // myList.setAttribute("id", "SomeRandomId");
  // myList.setAttribute("class", "sammary SomeRandomClass");
  //Elements
  // myList.removeChild(myList.firstElementChild);
  // const newLi = document.createElement("li");
  // newLi.textContent = "Hello";
  // myList.appendChild(newLi);
  //Text Content
  myList.firstChild.textContent = "somthing else";
}, 1000);
