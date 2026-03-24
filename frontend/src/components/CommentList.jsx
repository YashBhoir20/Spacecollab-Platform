const CommentList = ({ comments }) => {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment._id} className="bg-slate-800 p-4 rounded-lg">
          <p className="text-sm text-sky-400 font-semibold">
            {comment.user_id?.name} ({comment.user_id?.role})
          </p>
          <p className="text-slate-200">{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;

