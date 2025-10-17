function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkedDog = true;
            if (walkedDog) {
                resolve("You walk the dog 🐕");
            } else {
                reject("You didn't walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanedKitchen = true;
            if (cleanedKitchen) {
                resolve("You clean the kitchen 🍽️");
            } else {
                reject("You didn't clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanedTrash = true;
            if (cleanedTrash) {
                resolve("You take out the trash 🗑️");
            } else {
                reject("You didn't take out the trash");
            }
        }, 500);
    });
}

async function doChores() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores");
    } catch (error) {
        console.error(error);
    }
}

doChores();