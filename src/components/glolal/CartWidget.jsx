import {RiShoppingCartLine} from 'react-icons/ri'
import {Popover, OverlayTrigger, Button} from 'react-bootstrap'

const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
)

function CartWidget () {
    return (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <Button variant="dark"><RiShoppingCartLine /></Button>
        </OverlayTrigger>
    )
}

export default CartWidget