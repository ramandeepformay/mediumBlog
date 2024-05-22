import bcryptjs from "bcryptjs";

export const hashing = async function (password: string) {
    const salt = await bcryptjs.genSalt(10);
    const securedPassword = await bcryptjs.hash(password, salt);
    return securedPassword;
}
