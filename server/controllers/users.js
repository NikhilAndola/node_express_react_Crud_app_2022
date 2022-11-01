import {v4 as uuid} from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    let user = req.body;

    users.push({...user, id: uuid()});
    res.send("User added successfully");
}

export const getUser = (req, res) => {
    let id = req.params.id;
    let data = users.filter((user) => user.id === id)
    res.send(data);
}

export const deleteUser = (req, res) => {
    let data = users.filter(user => user.id !== req.params.id);
    users = data;
    res.send("Data deleted successfully!");
}

export const updateUser = (req, res) => {
    let data = req.body;
    let userToUpdate = users.map(user => {
        if(user.id === req.params.id){
            return {...user, ...data}
        }
    });
    users = userToUpdate;
    res.send("Data updated successfully")

}