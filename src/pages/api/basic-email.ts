export default async (req, res) => {
    // Check the secret and next parameters
    // This secret should only be known to this API route and the CMS
    if (
        req.query.secret !== process.env.NEXT_EXAMPLE_CMS_TAKESHAPE_PREVIEW_SECRET ||
        !req.query.slug
    ) {
        return res.status(401).json({ message: "Invalid token" });
    }

    res.end();
};
