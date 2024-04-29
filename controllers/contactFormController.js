const processForm = (req, res) => {
    console.log('POST /contact');
    try{
        const name = req.body.name;
        const email = req.body.email;
        const msg = req.body.msg;

        console.log(name, email, msg)

        res.status(200).send({response: "Paldies! Jūsu ziņa ir saņemta!"})
  
    }
    
    catch (error) {
        res.status(400).send({msg: err.message})
    }
}

module.exports = {processForm}
