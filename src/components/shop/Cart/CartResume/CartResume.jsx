export const CartResume = ({prod}) => {
    
    
    return (
        <>
            <table class="table">
                <tbody>
                    <tr>
                    <td>{prod.artist}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-end">$ {prod.price * prod.quantity}</td>
                    </tr>
                </tbody>
            </table>    
        </>
    )
}