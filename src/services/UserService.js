import { request} from "../http-common";

class UserService{
    getUsers(){
        return request.get("users");
    }
    removeUser(id) {
        return request.delete("users/" + id)
    }
    getOne(id) {
        return request.get("users/" + id)
    }
    update(id, data) {
        return request.put(`/users/${id}`, data);
    }
    save(data) {
        return request.post("users", data);
    }

}
export default new UserService();