const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.static((__dirname, './darkest/build')));

// Cloud firebase
const admin = require("firebase-admin");
const serviceAccount = require("./creds.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

// api get heroes
app.get("/api/heroes", async (req, res) => {
    const heroes = await getHeroes();
    res.json((heroes));
});

// api get stats of a hero
app.get("/api/heroes/:id", async (req, res) => {
    const id = req.params.id;
    const stats = await getHeroStats(id);
    res.json((stats))
});


app.listen(PORT, () => {
    console.log('Listening on ' + PORT + '..');
});

// get heroes from db
async function getHeroes() {
    const snapshot = await db.collection("heroes").get();
    var arr = [];
    snapshot.forEach(doc => {
        arr.push({ id: doc.id, name: doc.data().name });
    });
    return arr;
};

// get all the stats of a hero
async function getHeroStats(id) {
    const stats = await getStats(id);
    const resolve1 = await getResolve(id, 1);
    const resolve2 = await getResolve(id, 2);
    const resolve3 = await getResolve(id, 3);
    const resolve4 = await getResolve(id, 4);
    const resolve5 = await getResolve(id, 5);

    return [stats, resolve1, resolve2, resolve3, resolve4, resolve5];
}

async function getResolve(id, level) {
    const collect = 'resolve' + level;
    const doc = await db.collection(collect).doc(id).get();
    if (!doc.exists) {
        return;
    } else {
        return doc.data();
    }
}

async function getStats(id) {
    const doc = await db.collection('stats').doc(id).get();
    if (!doc.exists) {
        return;
    } else {
        return doc.data();
    }
}
