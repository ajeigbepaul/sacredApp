import { FaWindows, FaWifi } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import { TbDeviceMobileFilled } from "react-icons/tb";
export const setupArray = [
  { name: "Windows", Icon: FaWindows },
  { name: "Mac Os", Icon: FaApple },
  { name: "Andriod", Icon: AiFillAndroid },
  { name: "iPhone/iPad", Icon: TbDeviceMobileFilled },
  { name: "Router", Icon: FaWifi },
];

export const stepsArray = [
  {
    step: "1",
    title: `Login to Your Router's Administrative Panel
 `,
    descr: `First, access your router's administrative panel. It's generally located at the same IP
address as your network gateway.
Common addresses include:
http://192.168.1.1
http://192.168.254.254
http://10.0.0.1
If these don't work, check the back of your router for the login URL.
Your router's administrative panel would be at http://192.168.100.1. If you don't
know the password, it is usually on the back of the router
`,
  },
  {
    step: "3",
    title: "Configure Connection Settings",
    descr: `Next, locate the network connection settings in your router's admin panel. This may be
under "WAN Settings," "Connection Settings," "Internet," or similar. Look for options to
change the "DNS Server" or "DNS Name Server." It should allow you to change DNS1
and DNS2 settings. Ignore options related to DynDNS (Dynamic DNS).
Change the Primary DNS Address to 54.164.114.48 and the Secondary DNS to
54.164.114.48.
`,
  },
  {
    step: "3",
    title: "Save Your Changes",
    descr: `After updating the DNS settings, click on "Apply" or "Save" to save your changes. It
might take a few minutes for your computer to refresh the DHCP lease and get the new
DNS settings. You can force this update by disabling and re-enabling your WiFi.
To test the new settings, visit badexample.com. You should see a "domain not found"
error if everything is configured correctly.
By following these steps, you can ensure that your network is protected with
SacredEyes DNS.
`,
  },
  {
    step: "4",
    title: "Verify Configuration",
    descr: `The final step is to verify the DNS configuration is working. You can use DNS Leak Test
to help with this.
You will run the Standard Test. The output should show SacredEyes in the response.
It is advised to take the time to flush your DNS resolver cache on your local machine
and browser caches to ensure that your new DNS configuration settings take affect.It
can take 10 – 15 minutes for the change to take affect, be patient. The additional time is
the time required for your computer DHCP Lease to get the new DNS. If you disable
your Wifi and re-enable it, it will force it right away (you can also reboot the router).
`,
  },
];

export const tableData = [
  {
    dateTime: "2024-11-12 14:35",
    action: "done",
    ipAddress: "192.168.1.1",
    type: "A",
    domain: "example.com",
  },
  {
    dateTime: "2024-11-13 10:15",
    action: "done",
    ipAddress: "172.16.0.2",
    type: "A",
    domain: "sample.net",
  },
  {
    dateTime: "2024-11-14 09:45",
    action: "done",
    ipAddress: "10.0.0.3",
    type: "A",
    domain: "testsite.org",
  },
  {
    dateTime: "2024-11-12 14:35",
    action: "done",
    ipAddress: "192.168.1.1",
    type: "A",
    domain: "example.com",
  },
  {
    dateTime: "2024-11-13 10:15",
    action: "done",
    ipAddress: "172.16.0.2",
    type: "A",
    domain: "sample.net",
  },
  {
    dateTime: "2024-11-14 09:45",
    action: "done",
    ipAddress: "10.0.0.3",
    type: "A",
    domain: "testsite.org",
  },
  {
    dateTime: "2024-11-12 14:35",
    action: "done",
    ipAddress: "192.168.1.1",
    type: "A",
    domain: "example.com",
  },
  {
    dateTime: "2024-11-13 10:15",
    action: "done",
    ipAddress: "172.16.0.2",
    type: "A",
    domain: "sample.net",
  },
  {
    dateTime: "2024-11-14 09:45",
    action: "done",
    ipAddress: "10.0.0.3",
    type: "A",
    domain: "testsite.org",
  },

  // Add more sample data as needed
];
export const blockedData = [
  {
    createdAt: "2024-03-20",
    deviceIp: "192.168.1.1",
    access_type: "Block",
    action: "Blocked",
    domain: "example.com",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "172.16.0.2",
    access_type: "Block",
    action: "Blocked",
    domain: "sample.net",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "10.0.0.3",
    access_type: "Block",
    action: "Blocked",
    domain: "testsite.org",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "192.168.1.1",
    access_type: "Block",
    action: "Blocked",
    domain: "example.com",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "172.16.0.2",
    access_type: "Block",
    action: "Blocked",
    domain: "sample.net",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "10.0.0.3",
    access_type: "Block",
    action: "Blocked",
    domain: "testsite.org",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "192.168.1.1",
    access_type: "Block",
    action: "Blocked",
    domain: "example.com",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "172.16.0.2",
    access_type: "Block",
    action: "Blocked",
    domain: "sample.net",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "10.0.0.3",
    access_type: "Block",
    action: "Blocked",
    domain: "testsite.org",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "192.168.1.1",
    access_type: "Block",
    action: "Blocked",
    domain: "example.com",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "172.16.0.2",
    access_type: "Block",
    action: "Blocked",
    domain: "sample.net",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "10.0.0.3",
    access_type: "Block",
    action: "Blocked",
    domain: "testsite.org",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "192.168.1.1",
    access_type: "Block",
    action: "Blocked",
    domain: "example.com",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "172.16.0.2",
    access_type: "Block",
    action: "Blocked",
    domain: "sample.net",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "10.0.0.3",
    access_type: "Block",
    action: "Blocked",
    domain: "testsite.org",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "192.168.1.1",
    access_type: "Block",
    action: "Blocked",
    domain: "example.com",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "172.16.0.2",
    access_type: "Block",
    action: "Blocked",
    domain: "sample.net",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "10.0.0.3",
    access_type: "Block",
    action: "Blocked",
    domain: "testsite.org",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "192.168.1.1",
    access_type: "Block",
    action: "Blocked",
    domain: "example.com",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "172.16.0.2",
    access_type: "Block",
    action: "Blocked",
    domain: "sample.net",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "10.0.0.3",
    access_type: "Block",
    action: "Blocked",
    domain: "testsite.org",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "192.168.1.1",
    access_type: "Block",
    action: "Blocked",
    domain: "example.com",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "172.16.0.2",
    access_type: "Block",
    action: "Blocked",
    domain: "sample.net",
  },
  {
    createdAt: "2024-03-20",
    deviceIp: "10.0.0.3",
    access_type: "Block",
    action: "Blocked",
    domain: "testsite.org",
  },
  // Add more sample data as needed
];
export const domainData = [
  {
    platform: { icon: "/platimage.svg", text: "WWW.youtube.com" },
    status: "Not blocked by any categoty.",
    action: { icon: "/allowed.svg", text: "Allowed" },
  },
  {
    platform: { icon: "/platimage.svg", text: "WWW.example.com" },
    status: "Not blocked by any category.",
    action: { icon: "/allowed.svg", text: "Allowed" },
  },
  {
    platform: { icon: "/platimage.svg", text: "WWW.sample.com" },
    status: "Blocked by Adult & Pornography category.",
    action: { icon: "/blockedd.svg", text: "Blocked" },
  },
  {
    platform: { icon: "/platimage.svg", text: "WWW.testsite.org" },
    status: "Not blocked by any category.",
    action: { icon: "/allowed.svg", text: "Allowed" },
  },
  {
    platform: { icon: "/platimage.svg", text: "WWW.malicious.com" },
    status: "Blocked by Malicious category.",
    action: { icon: "/blockedd.svg", text: "Blocked" },
  },
  {
    platform: { icon: "/platimage.svg", text: "WWW.anotherexample.net" },
    status: "Not blocked by any category.",
    action: { icon: "/allowed.svg", text: "Allowed" },
  },
  {
    platform: { icon: "/platimage.svg", text: "WWW.youtube.com" },
    status: "Not blocked by any categoty.",
    action: { icon: "/allowed.svg", text: "Allowed" },
  },
  {
    platform: { icon: "/platimage.svg", text: "WWW.example.com" },
    status: "Not blocked by any category.",
    action: { icon: "/allowed.svg", text: "Allowed" },
  },
  {
    platform: { icon: "/platimage.svg", text: "WWW.sample.com" },
    status: "Blocked by Adult & Pornography category.",
    action: { icon: "/blockedd.svg", text: "Blocked" },
  },
  {
    platform: { icon: "/platimage.svg", text: "WWW.testsite.org" },
    status: "Not blocked by any category.",
    action: { icon: "/allowed.svg", text: "Allowed" },
  },
  {
    platform: { icon: "/platimage.svg", text: "WWW.malicious.com" },
    status: "Blocked by Malicious category.",
    action: { icon: "/blockedd.svg", text: "Blocked" },
  },
  {
    platform: { icon: "/platimage.svg", text: "WWW.anotherexample.net" },
    status: "Not blocked by any category.",
    action: { icon: "/allowed.svg", text: "Allowed" },
  },
  // Add more sample data as needed
];
export const cfArray = [
  {
    icon: "/porn.svg",
    title: "Adult & Pornography",
    subtitle: "Pornography videos and movies ",
  },
  {
    icon: "/malicious.svg",
    title: "Maliciuous",
    subtitle: "Block malicious contents",
  },
  {
    icon: "/adultmixed.svg",
    title: "Adult Mixed Content",
    subtitle: "Pornography videos and movies ",
  },
  {
    icon: "/ads.svg",
    title: "Ads & Tracking",
    subtitle: "Block Ads and Tracking servers",
  },
  { icon: "/torrent.svg", title: "Torrents", subtitle: "Block all Torrents" },
  {
    icon: "/p2p.svg",
    title: "P2P & File Sharing",
    subtitle: "Block all p2p & Sharing",
  },
  {
    icon: "/proxy.svg",
    title: "Proxy & VPNs",
    subtitle: "Block VPNs and Proxy",
  },
];
