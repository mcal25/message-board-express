import express from 'express';
import ejs from 'ejs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, 'public');
const PORT = process.env.PORT || 3001;


app.use('/', appRouter);

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Peepin' on port ${PORT}`);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')