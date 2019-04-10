const Char = []
const meu = {
    user: "cabeca",
    password: "cabeca123"
}
module.exports = {
    async index(req,res){
       
        return res.json(meu)
    },
     async show(req,res){
           
           // return res.json(char)
           
     }, 
    async store(req,res){
       
        return res.json(char)
    },
    async update(req,res){
        
        return res.json(char)
    },
    async destroy(req,res){
       
        return res.send()
    }

};