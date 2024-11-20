import React from 'react';
import { User, Award, Palette } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Profile Header */}
          <div className="relative h-48 bg-emerald-700">
            <div className="absolute -bottom-16 left-8">
              <div className="bg-white p-2 rounded-full">
                <div className="bg-emerald-100 rounded-full p-4">
                  <User className="h-20 w-20 text-emerald-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-20 pb-8 px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Jane Smith</h2>
                <p className="text-gray-600">jane.smith@example.com</p>
              </div>
              <button className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-emerald-600 rounded-md shadow-sm text-sm font-medium text-emerald-600 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                Edit Profile
              </button>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-emerald-600" />
                  <h3 className="ml-3 text-lg font-semibold">Sustainability Score</h3>
                </div>
                <p className="mt-4 text-3xl font-bold text-emerald-600">85</p>
                <p className="mt-1 text-sm text-gray-600">Top 15% of users</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center">
                  <Palette className="h-8 w-8 text-emerald-600" />
                  <h3 className="ml-3 text-lg font-semibold">My Designs</h3>
                </div>
                <p className="mt-4 text-3xl font-bold text-emerald-600">12</p>
                <p className="mt-1 text-sm text-gray-600">Active designs</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center">
                  <User className="h-8 w-8 text-emerald-600" />
                  <h3 className="ml-3 text-lg font-semibold">Following</h3>
                </div>
                <p className="mt-4 text-3xl font-bold text-emerald-600">248</p>
                <p className="mt-1 text-sm text-gray-600">Community members</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">New Design Upload</p>
                        <p className="text-sm text-gray-600">Sustainable Summer Collection</p>
                      </div>
                      <span className="text-sm text-gray-500">2 days ago</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;