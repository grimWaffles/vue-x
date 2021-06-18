class Department{
    
    constructor(){
        this.id=null;this.code=null;this.departmentName=null;this.school=null;
    }

    getDepartments(){
        let url='https://localhost:44313/api/departments';
    }

    getDepartment(id){
        let url='https://localhost:44313/api/department/view/'+id
    }

    putDepartment(id,department){
        let url='https://localhost:44313/api/department/update/'+id
        //send department object as json
    }

    postDepartment(department){
        let url='https://localhost:44313/api/department'
    }
}