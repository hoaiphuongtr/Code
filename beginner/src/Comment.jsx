const formatDate = (date) => {
    return new Date(date).toTimeString()
}
function Avatar(props) {
    ;<img src='{props.user.avatarUrl}' alt='{props.user.name}' />
}
const UserInfo = (props) => {
    ;<div className='UserInfo'>
        <Avatar user={props.user} />
        <div className='UserInfo-name'>{props.user.name}</div>
    </div>
}
function Comment(props) {
    return (
        <div className='Comment'>
            <UserInfo user={props.author} />
            <div className='CommentText'>{props.text}</div>
            <div className='Comment-date'>{formatDate(props.date)}</div>
        </div>
    )
}
export default Comment
