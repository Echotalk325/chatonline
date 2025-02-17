import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageCircle, User } from "lucide-react";

export default function SocialApp() {
  const [posts, setPosts] = useState([
    { id: 1, user: "중학생", content: "안녕하세요!" },
    { id: 2, user: "영희", content: "오늘 날씨 좋네요 ☀️" }
  ]);
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (newPost.trim() !== "") {
      setPosts([...posts, { id: posts.length + 1, user: "중학생", content: newPost }]);
      setNewPost("");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">소셜 커뮤니티</h1>
      <div className="flex space-x-2">
        <Input
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="무슨 생각을 하고 있나요?"
        />
        <Button onClick={addPost}>게시</Button>
      </div>
      <div className="space-y-2">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardContent className="flex items-center space-x-2 p-3">
              <User className="w-6 h-6" />
              <div>
                <p className="font-semibold">{post.user}</p>
                <p>{post.content}</p>
              </div>
              <MessageCircle className="ml-auto w-5 h-5 text-gray-500" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
