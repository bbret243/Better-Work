export const getBoxStyles = (type) => ({
    background: type === 'error' ? 'rgba(255, 0, 0, .30)' : 'rgba(0, 255, 0, .1)',
    color: type === 'error' ? 'darkred' : 'green',
    border: type === 'error' ? '2px darkred solid' : '2px green solid',
    padding: "16px"
})
