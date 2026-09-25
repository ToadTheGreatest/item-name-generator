const lists = {
    "metals": ["iron", "copper", "brass", "gold", "aluminum", "titanium", "tungsten", "steel",],
    "weapon": {
        "modifier": ["rusty", "great", "polished", "upgraded", "weathered", "decayed"],
        "material": ["iron", "copper", "brass", "gold", "aluminum", "titanium", "tungsten", "steel", "wooden"],
        "type": ["sword", "dagger", "claymore", "spear", "bow", "club", "bat"],
        "blessing": ["+1", "+2", "+3", "+4", "+5", "of the hero", "of life", "of the great", "of the lord"],
    }
}
function choice(list) {
    return list[Math.floor(Math.random() * list.length)];
}
function generateWeapon() {
    // oui oui~~
    // hehe boii
    const checkboxes = {
        "modifier": document.getElementById("wp-modifier").checked,
        "material": document.getElementById("wp-material").checked,
        "type": document.getElementById("wp-type").checked,
        "blessing": document.getElementById("wp-blessing").checked,
    };
    var name = [];
    if (checkboxes.modifier) {
        name.push(choice(lists.weapon.modifier));
    }
    if (checkboxes.material) {
        name.push(choice(lists.weapon.material));
    }
    if (checkboxes.type) {
        name.push(choice(lists.weapon.type));
    }
    if (checkboxes.blessing) {
        name.push(choice(lists.weapon.blessing));
    }
    var output = name.join(" ");
    document.getElementById("wp-output").textContent = output;
}
function generate(type) {
    if (type == "weapon") {
        generateWeapon()
    }
}