import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";

export function RecentOrders() {
  const orders = [
    {
      name: "Arjun Gupta",
      email: "arjun.gupta@example.com",
      amount: "+₹2,999.00",
      status: "pending",
      avatarSrc: "/avatars/01.png",
      avatarFallback: "AG"
    },
    {
      name: "Priya Sharma",
      email: "priya.sharma@example.com",
      amount: "+₹1,499.00",
      status: "shipped",
      avatarSrc: "/avatars/02.png",
      avatarFallback: "PS"
    },
    {
      name: "Ananya Patel",
      email: "ananya.patel@example.com",
      amount: "+₹899.00",
      status: "delivered",
      avatarSrc: "/avatars/03.png",
      avatarFallback: "AP"
    },
    {
      name: "Rahul Singh",
      email: "rahul.singh@example.com",
      amount: "+₹499.00",
      status: "pending",
      avatarSrc: "/avatars/04.png",
      avatarFallback: "RS"
    },
    {
      name: "Neha Joshi",
      email: "neha.joshi@example.com",
      amount: "+₹199.00",
      status: "shipped",
      avatarSrc: "/avatars/05.png",
      avatarFallback: "NJ"
    },
  ];

  const sortedOrders = orders.sort((a, b) => {
    const amountA = parseFloat(a.amount.replace(/[^\d.-]/g, ""));
    const amountB = parseFloat(b.amount.replace(/[^\d.-]/g, ""));
    return amountB - amountA;
  });

  return (
    <div className="space-y-4">
      {sortedOrders.map((order, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-md"
        >
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={order.avatarSrc} alt="Avatar" />
              <AvatarFallback>{order.avatarFallback}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{order.name}</p>
              <p className="text-xs text-gray-500">{order.email}</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-sm font-medium text-gray-700">{order.amount}</p>
            <span
              className={`ml-2 px-2 py-1 text-xs font-medium rounded ${
                order.status === "pending"
                  ? "bg-yellow-100 text-yellow-600"
                  : order.status === "shipped"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {order.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
