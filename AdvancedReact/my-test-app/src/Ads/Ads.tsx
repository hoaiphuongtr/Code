import websiteUI from '../images/learning-website-ui.png';

export default function Ads({
    x,
    y,
    visible
}: {
    x: number;
    y: number;
    visible: boolean;
}) {
    return (
        <div>
            <img
                src={websiteUI}
                alt='website-UI'
                style={{ width: '80rem', height: 'auto' }}
            />
            <p>Position Mouse</p>
            <ul>
                <li>X : {x}</li>
                <li>Y : {y}</li>
            </ul>
        </div>
    );
}
// export default withMouseTracker(Ads);
