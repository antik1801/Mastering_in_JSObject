# Summary:
<li>Creating and object</li>
<li>Object.keys()</li>
<li>Object.values()</li>
<li>object.entries()</li>
<li>delete obj.name</li>
<li>delete obj.name</li>
<li>object.seal(obj)</li>
<li>Object.freeze(obj)</li>
<li>for(const key in object) => loop through an object</li>
<li>JSON.Stringify(object)</li>
<li>object.functionName.call(thisObject,parameters...)</li>
<li>object.functionName.apply(thisObject,[parameters...])</li>
<li>JSON.parse(JSON.stringify(data)) ===> Object copy proper method</li>

```
const data ={name:"Alice", age:26}
const dataCopy = JSON.parse(JSON.stringify(data))
```

```
3 ways to access in objects
1. bottle.element
2. bottle['key']
3. bottle[value]
```
```
function compareObject(first,second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys.length === secondKeys.length) {
       for (const key of firstKeys) {
        if (first[key] !== second[key]) {
            return false;
        } 
    }
    return true;
    }

}
```

