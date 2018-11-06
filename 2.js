var login = prompt("Who are you?");
switch (login) {
    case "Employee":
        alert("Hello");
        break;
    case "Director":
        break;
    case null:
        alert("No login");
        break;
    default:
        alert("")
}