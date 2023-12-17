const errorHandler = (err, req, res, next) => {
    console.log(err)

    if(err.name == 'paramsError') {
        res.status(400).json({message: "need name and publisher params"})
    } else if(err.name == 'notFound') {
        res.status(404).json({message: "movies not found"})
    } else {
        res.status(500).json({message: "internal server error"})
    }

}

module.exports = errorHandler;