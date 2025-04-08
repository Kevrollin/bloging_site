"use client"

import { useState } from "react"
import { MessageSquare, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Comment {
  id: string
  author: {
    name: string
    avatar: string
    initials: string
  }
  content: string
  date: string
  likes: number
  isLiked?: boolean
  replies?: Comment[]
}

export function CommentSection({ postId }: { postId: string }) {
  const [commentText, setCommentText] = useState("")
  const [showAllComments, setShowAllComments] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyText, setReplyText] = useState("")
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: {
        name: "Sarah Miller",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SM",
      },
      content:
        "This article is incredibly helpful! I've been struggling with optimizing my website's performance, and these tips are exactly what I needed. Thanks for sharing!",
      date: "2 hours ago",
      likes: 15,
      isLiked: false,
      replies: [
        {
          id: "1-1",
          author: {
            name: "Alex Johnson",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "AJ",
          },
          content:
            "Thanks, Sarah! I'm glad you found it helpful. Let me know if you have any specific questions about implementing any of these tips.",
          date: "1 hour ago",
          likes: 3,
          isLiked: false,
        },
      ],
    },
    {
      id: "2",
      author: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MC",
      },
      content:
        "Great article! I especially appreciate the section on accessibility. It's often overlooked but so important for creating inclusive web experiences.",
      date: "5 hours ago",
      likes: 8,
      isLiked: false,
    },
    {
      id: "3",
      author: {
        name: "Emily Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "ER",
      },
      content:
        "I've been using CSS Grid for a while now, but I learned some new techniques from your article. The combination of Grid and Flexbox is really powerful!",
      date: "1 day ago",
      likes: 12,
      isLiked: false,
    },
  ])

  const displayedComments = showAllComments ? comments : comments.slice(0, 2)
  const totalComments = comments.reduce((total, comment) => {
    return total + 1 + (comment.replies?.length || 0)
  }, 0)

  const handleSubmitComment = () => {
    if (commentText.trim()) {
      const newComment: Comment = {
        id: `${comments.length + 1}`,
        author: {
          name: "You",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "YO",
        },
        content: commentText,
        date: "Just now",
        likes: 0,
        isLiked: false,
      }
      setComments([newComment, ...comments])
      setCommentText("")
    }
  }

  const handleLikeComment = (commentId: string, isReply = false, parentId?: string) => {
    setComments(
      comments.map((comment) => {
        if (!isReply && comment.id === commentId) {
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked,
          }
        } else if (isReply && parentId && comment.id === parentId && comment.replies) {
          return {
            ...comment,
            replies: comment.replies.map((reply) => {
              if (reply.id === commentId) {
                return {
                  ...reply,
                  likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
                  isLiked: !reply.isLiked,
                }
              }
              return reply
            }),
          }
        }
        return comment
      }),
    )
  }

  const handleReply = (commentId: string) => {
    if (replyingTo === commentId) {
      setReplyingTo(null)
    } else {
      setReplyingTo(commentId)
      setReplyText("")
    }
  }

  const handleSubmitReply = (commentId: string) => {
    if (replyText.trim()) {
      const newReply: Comment = {
        id: `${commentId}-${Date.now()}`,
        author: {
          name: "You",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "YO",
        },
        content: replyText,
        date: "Just now",
        likes: 0,
        isLiked: false,
      }

      setComments(
        comments.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              replies: [...(comment.replies || []), newReply],
            }
          }
          return comment
        }),
      )

      setReplyingTo(null)
      setReplyText("")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Comments ({totalComments})</h2>
        <Button variant="ghost" onClick={() => setShowComments(!showComments)} className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          {showComments ? "Hide Comments" : "Show Comments"}
        </Button>
      </div>

      {showComments && (
        <>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback>YO</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <Textarea
                  placeholder="Add a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="min-h-[100px]"
                />
                <Button onClick={handleSubmitComment}>Post Comment</Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {displayedComments.map((comment) => (
              <div key={comment.id} className="space-y-4">
                <div className="flex gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                    <AvatarFallback>{comment.author.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{comment.author.name}</span>
                      <span className="text-xs text-muted-foreground">{comment.date}</span>
                    </div>
                    <p className="mt-1">{comment.content}</p>
                    <div className="mt-2 flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`h-8 gap-1 ${comment.isLiked ? "text-primary" : ""}`}
                        onClick={() => handleLikeComment(comment.id)}
                      >
                        <ThumbsUp className="h-4 w-4" />
                        Like
                        <span className="ml-1 text-xs text-muted-foreground">({comment.likes})</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8" onClick={() => handleReply(comment.id)}>
                        Reply
                      </Button>
                    </div>

                    {replyingTo === comment.id && (
                      <div className="mt-4 flex gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>YO</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <Textarea
                            placeholder={`Reply to ${comment.author.name}...`}
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            className="min-h-[80px]"
                          />
                          <div className="flex gap-2">
                            <Button size="sm" onClick={() => handleSubmitReply(comment.id)}>
                              Post Reply
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => setReplyingTo(null)}>
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {comment.replies && comment.replies.length > 0 && (
                  <div className="ml-14 space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={reply.author.avatar} alt={reply.author.name} />
                          <AvatarFallback>{reply.author.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{reply.author.name}</span>
                            <span className="text-xs text-muted-foreground">{reply.date}</span>
                          </div>
                          <p className="mt-1">{reply.content}</p>
                          <div className="mt-2 flex items-center gap-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`h-8 gap-1 ${reply.isLiked ? "text-primary" : ""}`}
                              onClick={() => handleLikeComment(reply.id, true, comment.id)}
                            >
                              <ThumbsUp className="h-4 w-4" />
                              Like
                              <span className="ml-1 text-xs text-muted-foreground">({reply.likes})</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {!showAllComments && comments.length > 2 && (
              <Button variant="outline" onClick={() => setShowAllComments(true)}>
                Show All Comments ({comments.length})
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

