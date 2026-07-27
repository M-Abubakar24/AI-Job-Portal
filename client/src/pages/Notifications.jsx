import { useEffect, useState } from "react";
import {
  getNotifications,
  markNotificationAsRead,
  deleteNotification,
} from "../services/notificationService";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const data = await getNotifications();
      setNotifications(data.notifications);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to load notifications");
    } finally {
      setLoading(false);
    }
  };

  const handleRead = async (id) => {
    try {
      await markNotificationAsRead(id);
      fetchNotifications();
    } catch (error) {
      alert("Failed to mark notification as read.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this notification?")) return;

    try {
      await deleteNotification(id);
      fetchNotifications();
    } catch (error) {
      alert("Failed to delete notification.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-semibold text-slate-600">
          Loading Notifications...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="mb-10">

          <h1 className="text-4xl font-bold text-slate-800">
            Notifications
          </h1>

          <p className="text-slate-500 mt-2">
            Stay informed about job applications, recruiter activity,
            and important updates.
          </p>

        </div>

        {notifications.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-md p-12 text-center">

            <div className="text-6xl mb-4">
              🔔
            </div>

            <h2 className="text-2xl font-bold text-slate-700">
              No Notifications
            </h2>

            <p className="text-slate-500 mt-3">
              You're all caught up.
            </p>

          </div>

        ) : (

          <div className="space-y-6">

            {notifications.map((notification) => (

              <div
                key={notification._id}
                className={`rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-7 ${
                  notification.isRead
                    ? "bg-white"
                    : "bg-indigo-50 border-l-4 border-indigo-600"
                }`}
              >

                <div className="flex justify-between items-start gap-6">

                  <div className="flex-1">

                    {!notification.isRead && (
                      <span className="inline-block bg-indigo-600 text-white text-xs px-3 py-1 rounded-full mb-3">
                        New
                      </span>
                    )}

                    <p className="text-lg text-slate-700 leading-7">
                      {notification.message}
                    </p>

                    <p className="text-sm text-slate-500 mt-4">
                      {new Date(notification.createdAt).toLocaleString()}
                    </p>

                  </div>

                  <div className="flex flex-col gap-3">

                    {!notification.isRead && (
                      <button
                        onClick={() => handleRead(notification._id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition"
                      >
                        Mark Read
                      </button>
                    )}

                    <button
                      onClick={() => handleDelete(notification._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl transition"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </div>
  );
};

export default Notifications;