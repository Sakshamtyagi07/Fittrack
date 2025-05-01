import React from 'react';
import { Dumbbell, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <Dumbbell className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">FitTrack</span>
            </div>
            <p className="mt-4 text-gray-400">
              Track your fitness journey with ease. Set goals, log workouts, and see your progress.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Features</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Workout Tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Exercise Library</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Progress Metrics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Workout Planner</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Fitness Articles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Nutrition Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Video Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Community Forums</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} FitTrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;