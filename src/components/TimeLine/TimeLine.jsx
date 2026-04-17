
'use client'
import { frContext } from "@/context/FriendContext";
import { notFound } from "next/navigation";
import { useContext, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
import { PiChatCircleTextLight } from "react-icons/pi";

const TimeLine = () => {
    const { friendData, setFriendData } = useContext(frContext);
   
     const [filterType, setFilterType] = useState("all");
   
     const filteredData =
       filterType === "all"
         ? friendData
         : friendData.filter((item) => item.type === filterType);
   
     
     return friendData.length > 0 ? (
       <div >
         <div className="grid gap-2 max-w-7xl mx-auto py-5">
         <div className="mx-2 lg:mx-0">
           <select
             onChange={(e) => setFilterType(e.target.value)}
             className="border border-zinc-200 w-full select outline-none max-w-xs p-2 rounded-md"
           >
             <option value="all">All</option>
             <option value="audio">Audio Calls</option>
             <option value="video">Video Calls</option>
             <option value="text">Text Messages</option>
           </select>
         </div>
         {filteredData.length > 0
           ? filteredData.map((friend) => (
               <div
                 className="border p-2 md:p-4 border-zinc-200 rounded-xl flex items-center md:gap-4 mx-2 lg:mx-0"
                 key={friend.id}
               >
                 <div>
                   {friend.type === "audio" ? (
                     <BiSolidPhoneCall className="text-2xl md:text-4xl" />
                   ) : friend.type === "text" ? (
                     <PiChatCircleTextLight className="text-2xl md:text-4xl" />
                   ) : friend.type === "video" ? (
                     <FaVideo className="text-2xl md:text-4xl" />
                   ) : (
                     notFound()
                   )}
                 </div>
                 <div>
                   <p className="flex gap-1">
                     <span className="font-bold">{friend.type} </span>
                     <span>with</span>
                     <span>{friend?.friend?.name}</span>
                   </p>
                   <p>
                     {" "}
                     {new Date(friend.timestamp).toLocaleDateString("en-US", {
                       month: "long",
                       day: "numeric",
                       year: "numeric",
                       hour:'numeric',
                       minute:'2-digit'
                     })}
                   </p>
                 </div>
               </div>
             ))
           : ""}
       </div>
       </div>
     ) : (
       notFound()
     );
};

export default TimeLine;