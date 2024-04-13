import { useState } from "react";
import { Link } from "react-router-dom";

interface PostListProp {
    hasNavigation?: boolean;
}

type TabType = "all" | "my";

export default function PostList({ hasNavigation = true }: PostListProp) {
    const [activeTab, setActiveTab] = useState<TabType>('all');

    return (
        <>
            {hasNavigation && (
                <div className="post__navigation">
                    <div
                        role="presentation"
                        onClick={() => setActiveTab("all")}
                        className={activeTab === 'all' ? "post__navigation--active" : ""}
                    >
                        전체
                    </div>
                    <div
                        role="presentation"
                        onClick={() => setActiveTab("my")}
                        className={activeTab === 'my' ? "post__navigation--active" : ""}
                    >
                        나의 글
                    </div>
                </div >
            )
            }
            <div className="post__list">
                {[...Array(10)].map((e, index) => (
                    <div key={index} className="post__box">
                        <Link to={`/posts/${index}`}>
                            <div className="post__profile-box">
                                <div className="post__profile" />
                                <div className="post__author-name">패스트 캠퍼스</div>
                                <div className="post__date">2024.04.10 수요일</div>
                            </div>
                            <div className="post__title">게시글 {index}</div>
                            <div className="post__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                            <div className="post__utils-box">
                                <div className="post__edit">수정</div>
                                <div className="post__delete">삭제</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}