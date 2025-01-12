export const handleError = (res, err) => {
    res.status(500).json({
        message: "Internal Server Error",
        error: err.message,
    })
}

export const validateData = (schema, req, res) => {
    const validation = schema.safeParse(req.body)
    if (!validation.success) {
        res.status(400).json({
            message: validation.error.issues.map(
              (err) => `${err.path}: ${err.message}`
            ),
        });
        return false;
    }
    return true;
}