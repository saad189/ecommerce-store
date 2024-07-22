const AuthParentContainer = ({ children }: {
    readonly children: React.ReactNode
}) => {
    return (
        <div className="h-screen flex flex-col items-center justify-center ">
            {children}
        </div >
    )
}

export default AuthParentContainer;