// combination of two or more types of data types as if we are not sure what would be the data that would come in. It is done by using the | operator
var score = 33;
score = 44;
score = "github";
var github = {
    name: "git", id: 689
};
github = { username: "clone", id: 4545 };
function getDbId(id) {
    if (typeof id === "number") {
        console.log("the entered number is ".concat(id));
    }
    else {
        console.log("db id is ".concat(id));
    }
}
getDbId("4");
