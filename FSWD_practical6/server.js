import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import { json } from 'body-parser';
import taskRoutes from './routes/taskRoutes';
const app = express();
const PORT = 5000;
app.use(cors());
app.use(json());
connect('mongodb://localhost:27017/taskmanager', {
useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
app.use('/tasks', taskRoutes);
app.listen(PORT, () => console.log(`Server running on http://localhost:3000`));
connect('mongodb://localhost:27017/taskmanager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("Connection Error:", err));