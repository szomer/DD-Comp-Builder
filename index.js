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
    const stats = await getStatsHero(id);
    res.json((stats))
});

// redirect to homepage
app.get('*', (req, res) => {
    res.sendFile((__dirname, '../darkest/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Listening on ' + PORT + '..');
})


// get heroes from db
async function getHeroes() {
    const snapshot = await db.collection("heroes").get();
    var arr = [];
    snapshot.forEach(doc => {
        arr.push({ id: doc.id, name: doc.data().name });
    });
    return arr;
}

// get stats of a hero from db
async function getStatsHero(id) {
    const doc = await db.collection('stats').doc(id).get();
    if (!doc.exists) {
        return;
    } else {
        const stats = {
            maxhp: doc.data().maxhp,
            resistances: doc.data().resistances,
            dodge: doc.data().dodge,
            spd: doc.data().spd,
            crit: doc.data().crit,
            dmg: doc.data().dmg
        }
        return stats;
    }
}