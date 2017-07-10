
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module system {
        export class ErrnoException extends javalangException {
            public errno: number;

            public getMessage(): string;

            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: number);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string, param1: number, param2: javalangThrowable);
            public constructor(param0: string);
        }
    }
}

import javanetInetSocketAddress = java.net.InetSocketAddress;
import javanetSocketAddress = java.net.SocketAddress;
/// <reference path="./android.system.StructPollfd.d.ts" />
/// <reference path="./android.system.StructStat.d.ts" />
/// <reference path="./android.system.StructStatVfs.d.ts" />
/// <reference path="./android.system.StructUtsname.d.ts" />
/// <reference path="./android.util.MutableInt.d.ts" />
/// <reference path="./android.util.MutableLong.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.InetSocketAddress.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module android {
    export module system {
        export class Os extends javalangObject {
            public static getenv(param0: string): string;

            public static accept(param0: javaioFileDescriptor, param1: javanetInetSocketAddress): javaioFileDescriptor;

            public static fstat(param0: javaioFileDescriptor): android.system.StructStat;

            public static msync(param0: number, param1: number, param2: number): void;

            public static pread(param0: javaioFileDescriptor, param1: javanioByteBuffer, param2: number): number;

            public static chmod(param0: string, param1: number): void;

            public static execve(param0: string, param1: native.Array<string>, param2: native.Array<string>): void;

            public static write(param0: javaioFileDescriptor, param1: javanioByteBuffer): number;

            public static gettid(): number;

            public static read(param0: javaioFileDescriptor, param1: native.Array<number>, param2: number, param3: number): number;

            public static lstat(param0: string): android.system.StructStat;

            public static munmap(param0: number, param1: number): void;

            public static setuid(param0: number): void;

            public static open(param0: string, param1: number, param2: number): javaioFileDescriptor;

            public static write(param0: javaioFileDescriptor, param1: native.Array<number>, param2: number, param3: number): number;

            public static mincore(param0: number, param1: number, param2: native.Array<number>): void;

            public static uname(): android.system.StructUtsname;

            public static sendfile(param0: javaioFileDescriptor, param1: javaioFileDescriptor, param2: android.util.MutableLong, param3: number): number;

            public static getpid(): number;

            public static dup2(param0: javaioFileDescriptor, param1: number): javaioFileDescriptor;

            public static pwrite(param0: javaioFileDescriptor, param1: javanioByteBuffer, param2: number): number;

            public static execv(param0: string, param1: native.Array<string>): void;

            public static setenv(param0: string, param1: string, param2: boolean): void;

            public static strsignal(param0: number): string;

            public static fstatvfs(param0: javaioFileDescriptor): android.system.StructStatVfs;

            public static lchown(param0: string, param1: number, param2: number): void;

            public static pwrite(param0: javaioFileDescriptor, param1: native.Array<number>, param2: number, param3: number, param4: number): number;

            public static munlock(param0: number, param1: number): void;

            public static remove(param0: string): void;

            public static tcdrain(param0: javaioFileDescriptor): void;

            public static statvfs(param0: string): android.system.StructStatVfs;

            public static stat(param0: string): android.system.StructStat;

            public static sysconf(param0: number): number;

            public static waitpid(param0: number, param1: android.util.MutableInt, param2: number): number;

            public static mkfifo(param0: string, param1: number): void;

            public static sendto(param0: javaioFileDescriptor, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: javanetInetAddress, param6: number): number;

            public static socketpair(param0: number, param1: number, param2: number, param3: javaioFileDescriptor, param4: javaioFileDescriptor): void;

            public static prctl(param0: number, param1: number, param2: number, param3: number, param4: number): number;

            public static writev(param0: javaioFileDescriptor, param1: native.Array<javalangObject>, param2: native.Array<number>, param3: native.Array<number>): number;

            public static unsetenv(param0: string): void;

            public static getppid(): number;

            public static mlock(param0: number, param1: number): void;

            public static chown(param0: string, param1: number, param2: number): void;

            public static bind(param0: javaioFileDescriptor, param1: javanetInetAddress, param2: number): void;

            public static fsync(param0: javaioFileDescriptor): void;

            public static getgid(): number;

            public static pread(param0: javaioFileDescriptor, param1: native.Array<number>, param2: number, param3: number, param4: number): number;

            public static read(param0: javaioFileDescriptor, param1: javanioByteBuffer): number;

            public static fchown(param0: javaioFileDescriptor, param1: number, param2: number): void;

            public static ftruncate(param0: javaioFileDescriptor, param1: number): void;

            public static rename(param0: string, param1: string): void;

            public static inet_pton(param0: number, param1: string): javanetInetAddress;

            public static access(param0: string, param1: number): boolean;

            public static kill(param0: number, param1: number): void;

            public static readv(param0: javaioFileDescriptor, param1: native.Array<javalangObject>, param2: native.Array<number>, param3: native.Array<number>): number;

            public static isatty(param0: javaioFileDescriptor): boolean;

            public static getegid(): number;

            public static getuid(): number;

            public static fchmod(param0: javaioFileDescriptor, param1: number): void;

            public static gai_strerror(param0: number): string;

            public static listen(param0: javaioFileDescriptor, param1: number): void;

            public static mmap(param0: number, param1: number, param2: number, param3: number, param4: javaioFileDescriptor, param5: number): number;

            public static environ(): native.Array<string>;

            public static seteuid(param0: number): void;

            public static tcsendbreak(param0: javaioFileDescriptor, param1: number): void;

            public static link(param0: string, param1: string): void;

            public static readlink(param0: string): string;

            public static socket(param0: number, param1: number, param2: number): javaioFileDescriptor;

            public static close(param0: javaioFileDescriptor): void;

            public static fdatasync(param0: javaioFileDescriptor): void;

            public static recvfrom(param0: javaioFileDescriptor, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: javanetInetSocketAddress): number;

            public static pipe(): native.Array<javaioFileDescriptor>;

            public static setsid(): number;

            public static symlink(param0: string, param1: string): void;

            public static umask(param0: number): number;

            public static dup(param0: javaioFileDescriptor): javaioFileDescriptor;

            public static shutdown(param0: javaioFileDescriptor, param1: number): void;

            public static getpeername(param0: javaioFileDescriptor): javanetSocketAddress;

            public static if_indextoname(param0: number): string;

            public static setegid(param0: number): void;

            public static getsockname(param0: javaioFileDescriptor): javanetSocketAddress;

            public static poll(param0: native.Array<android.system.StructPollfd>, param1: number): number;

            public static strerror(param0: number): string;

            public static recvfrom(param0: javaioFileDescriptor, param1: javanioByteBuffer, param2: number, param3: javanetInetSocketAddress): number;

            public static mkdir(param0: string, param1: number): void;

            public static lseek(param0: javaioFileDescriptor, param1: number, param2: number): number;

            public static sendto(param0: javaioFileDescriptor, param1: javanioByteBuffer, param2: number, param3: javanetInetAddress, param4: number): number;

            public static connect(param0: javaioFileDescriptor, param1: javanetInetAddress, param2: number): void;

            public static posix_fallocate(param0: javaioFileDescriptor, param1: number, param2: number): void;

            public static geteuid(): number;

            public static setgid(param0: number): void;
        }
    }
}

declare module android {
    export module system {
        export class OsConstants extends javalangObject {
            public static AF_INET: number;
            public static AF_INET6: number;
            public static AF_UNIX: number;
            public static AF_UNSPEC: number;
            public static AI_ADDRCONFIG: number;
            public static AI_ALL: number;
            public static AI_CANONNAME: number;
            public static AI_NUMERICHOST: number;
            public static AI_NUMERICSERV: number;
            public static AI_PASSIVE: number;
            public static AI_V4MAPPED: number;
            public static CAP_AUDIT_CONTROL: number;
            public static CAP_AUDIT_WRITE: number;
            public static CAP_BLOCK_SUSPEND: number;
            public static CAP_CHOWN: number;
            public static CAP_DAC_OVERRIDE: number;
            public static CAP_DAC_READ_SEARCH: number;
            public static CAP_FOWNER: number;
            public static CAP_FSETID: number;
            public static CAP_IPC_LOCK: number;
            public static CAP_IPC_OWNER: number;
            public static CAP_KILL: number;
            public static CAP_LAST_CAP: number;
            public static CAP_LEASE: number;
            public static CAP_LINUX_IMMUTABLE: number;
            public static CAP_MAC_ADMIN: number;
            public static CAP_MAC_OVERRIDE: number;
            public static CAP_MKNOD: number;
            public static CAP_NET_ADMIN: number;
            public static CAP_NET_BIND_SERVICE: number;
            public static CAP_NET_BROADCAST: number;
            public static CAP_NET_RAW: number;
            public static CAP_SETFCAP: number;
            public static CAP_SETGID: number;
            public static CAP_SETPCAP: number;
            public static CAP_SETUID: number;
            public static CAP_SYSLOG: number;
            public static CAP_SYS_ADMIN: number;
            public static CAP_SYS_BOOT: number;
            public static CAP_SYS_CHROOT: number;
            public static CAP_SYS_MODULE: number;
            public static CAP_SYS_NICE: number;
            public static CAP_SYS_PACCT: number;
            public static CAP_SYS_PTRACE: number;
            public static CAP_SYS_RAWIO: number;
            public static CAP_SYS_RESOURCE: number;
            public static CAP_SYS_TIME: number;
            public static CAP_SYS_TTY_CONFIG: number;
            public static CAP_WAKE_ALARM: number;
            public static E2BIG: number;
            public static EACCES: number;
            public static EADDRINUSE: number;
            public static EADDRNOTAVAIL: number;
            public static EAFNOSUPPORT: number;
            public static EAGAIN: number;
            public static EAI_AGAIN: number;
            public static EAI_BADFLAGS: number;
            public static EAI_FAIL: number;
            public static EAI_FAMILY: number;
            public static EAI_MEMORY: number;
            public static EAI_NODATA: number;
            public static EAI_NONAME: number;
            public static EAI_OVERFLOW: number;
            public static EAI_SERVICE: number;
            public static EAI_SOCKTYPE: number;
            public static EAI_SYSTEM: number;
            public static EALREADY: number;
            public static EBADF: number;
            public static EBADMSG: number;
            public static EBUSY: number;
            public static ECANCELED: number;
            public static ECHILD: number;
            public static ECONNABORTED: number;
            public static ECONNREFUSED: number;
            public static ECONNRESET: number;
            public static EDEADLK: number;
            public static EDESTADDRREQ: number;
            public static EDOM: number;
            public static EDQUOT: number;
            public static EEXIST: number;
            public static EFAULT: number;
            public static EFBIG: number;
            public static EHOSTUNREACH: number;
            public static EIDRM: number;
            public static EILSEQ: number;
            public static EINPROGRESS: number;
            public static EINTR: number;
            public static EINVAL: number;
            public static EIO: number;
            public static EISCONN: number;
            public static EISDIR: number;
            public static ELOOP: number;
            public static EMFILE: number;
            public static EMLINK: number;
            public static EMSGSIZE: number;
            public static EMULTIHOP: number;
            public static ENAMETOOLONG: number;
            public static ENETDOWN: number;
            public static ENETRESET: number;
            public static ENETUNREACH: number;
            public static ENFILE: number;
            public static ENOBUFS: number;
            public static ENODATA: number;
            public static ENODEV: number;
            public static ENOENT: number;
            public static ENOEXEC: number;
            public static ENOLCK: number;
            public static ENOLINK: number;
            public static ENOMEM: number;
            public static ENOMSG: number;
            public static ENOPROTOOPT: number;
            public static ENOSPC: number;
            public static ENOSR: number;
            public static ENOSTR: number;
            public static ENOSYS: number;
            public static ENOTCONN: number;
            public static ENOTDIR: number;
            public static ENOTEMPTY: number;
            public static ENOTSOCK: number;
            public static ENOTSUP: number;
            public static ENOTTY: number;
            public static ENXIO: number;
            public static EOPNOTSUPP: number;
            public static EOVERFLOW: number;
            public static EPERM: number;
            public static EPIPE: number;
            public static EPROTO: number;
            public static EPROTONOSUPPORT: number;
            public static EPROTOTYPE: number;
            public static ERANGE: number;
            public static EROFS: number;
            public static ESPIPE: number;
            public static ESRCH: number;
            public static ESTALE: number;
            public static ETIME: number;
            public static ETIMEDOUT: number;
            public static ETXTBSY: number;
            public static EXDEV: number;
            public static EXIT_FAILURE: number;
            public static EXIT_SUCCESS: number;
            public static FD_CLOEXEC: number;
            public static FIONREAD: number;
            public static F_DUPFD: number;
            public static F_GETFD: number;
            public static F_GETFL: number;
            public static F_GETLK: number;
            public static F_GETLK64: number;
            public static F_GETOWN: number;
            public static F_OK: number;
            public static F_RDLCK: number;
            public static F_SETFD: number;
            public static F_SETFL: number;
            public static F_SETLK: number;
            public static F_SETLK64: number;
            public static F_SETLKW: number;
            public static F_SETLKW64: number;
            public static F_SETOWN: number;
            public static F_UNLCK: number;
            public static F_WRLCK: number;
            public static IFA_F_DADFAILED: number;
            public static IFA_F_DEPRECATED: number;
            public static IFA_F_HOMEADDRESS: number;
            public static IFA_F_NODAD: number;
            public static IFA_F_OPTIMISTIC: number;
            public static IFA_F_PERMANENT: number;
            public static IFA_F_SECONDARY: number;
            public static IFA_F_TEMPORARY: number;
            public static IFA_F_TENTATIVE: number;
            public static IFF_ALLMULTI: number;
            public static IFF_AUTOMEDIA: number;
            public static IFF_BROADCAST: number;
            public static IFF_DEBUG: number;
            public static IFF_DYNAMIC: number;
            public static IFF_LOOPBACK: number;
            public static IFF_MASTER: number;
            public static IFF_MULTICAST: number;
            public static IFF_NOARP: number;
            public static IFF_NOTRAILERS: number;
            public static IFF_POINTOPOINT: number;
            public static IFF_PORTSEL: number;
            public static IFF_PROMISC: number;
            public static IFF_RUNNING: number;
            public static IFF_SLAVE: number;
            public static IFF_UP: number;
            public static IPPROTO_ICMP: number;
            public static IPPROTO_ICMPV6: number;
            public static IPPROTO_IP: number;
            public static IPPROTO_IPV6: number;
            public static IPPROTO_RAW: number;
            public static IPPROTO_TCP: number;
            public static IPPROTO_UDP: number;
            public static IPV6_CHECKSUM: number;
            public static IPV6_MULTICAST_HOPS: number;
            public static IPV6_MULTICAST_IF: number;
            public static IPV6_MULTICAST_LOOP: number;
            public static IPV6_RECVDSTOPTS: number;
            public static IPV6_RECVHOPLIMIT: number;
            public static IPV6_RECVHOPOPTS: number;
            public static IPV6_RECVPKTINFO: number;
            public static IPV6_RECVRTHDR: number;
            public static IPV6_RECVTCLASS: number;
            public static IPV6_TCLASS: number;
            public static IPV6_UNICAST_HOPS: number;
            public static IPV6_V6ONLY: number;
            public static IP_MULTICAST_IF: number;
            public static IP_MULTICAST_LOOP: number;
            public static IP_MULTICAST_TTL: number;
            public static IP_TOS: number;
            public static IP_TTL: number;
            public static MAP_FIXED: number;
            public static MAP_PRIVATE: number;
            public static MAP_SHARED: number;
            public static MCAST_BLOCK_SOURCE: number;
            public static MCAST_JOIN_GROUP: number;
            public static MCAST_JOIN_SOURCE_GROUP: number;
            public static MCAST_LEAVE_GROUP: number;
            public static MCAST_LEAVE_SOURCE_GROUP: number;
            public static MCAST_UNBLOCK_SOURCE: number;
            public static MCL_CURRENT: number;
            public static MCL_FUTURE: number;
            public static MSG_CTRUNC: number;
            public static MSG_DONTROUTE: number;
            public static MSG_EOR: number;
            public static MSG_OOB: number;
            public static MSG_PEEK: number;
            public static MSG_TRUNC: number;
            public static MSG_WAITALL: number;
            public static MS_ASYNC: number;
            public static MS_INVALIDATE: number;
            public static MS_SYNC: number;
            public static NI_DGRAM: number;
            public static NI_NAMEREQD: number;
            public static NI_NOFQDN: number;
            public static NI_NUMERICHOST: number;
            public static NI_NUMERICSERV: number;
            public static O_ACCMODE: number;
            public static O_APPEND: number;
            public static O_CREAT: number;
            public static O_EXCL: number;
            public static O_NOCTTY: number;
            public static O_NOFOLLOW: number;
            public static O_NONBLOCK: number;
            public static O_RDONLY: number;
            public static O_RDWR: number;
            public static O_SYNC: number;
            public static O_TRUNC: number;
            public static O_WRONLY: number;
            public static POLLERR: number;
            public static POLLHUP: number;
            public static POLLIN: number;
            public static POLLNVAL: number;
            public static POLLOUT: number;
            public static POLLPRI: number;
            public static POLLRDBAND: number;
            public static POLLRDNORM: number;
            public static POLLWRBAND: number;
            public static POLLWRNORM: number;
            public static PROT_EXEC: number;
            public static PROT_NONE: number;
            public static PROT_READ: number;
            public static PROT_WRITE: number;
            public static PR_GET_DUMPABLE: number;
            public static PR_SET_DUMPABLE: number;
            public static PR_SET_NO_NEW_PRIVS: number;
            public static RT_SCOPE_HOST: number;
            public static RT_SCOPE_LINK: number;
            public static RT_SCOPE_NOWHERE: number;
            public static RT_SCOPE_SITE: number;
            public static RT_SCOPE_UNIVERSE: number;
            public static R_OK: number;
            public static SEEK_CUR: number;
            public static SEEK_END: number;
            public static SEEK_SET: number;
            public static SHUT_RD: number;
            public static SHUT_RDWR: number;
            public static SHUT_WR: number;
            public static SIGABRT: number;
            public static SIGALRM: number;
            public static SIGBUS: number;
            public static SIGCHLD: number;
            public static SIGCONT: number;
            public static SIGFPE: number;
            public static SIGHUP: number;
            public static SIGILL: number;
            public static SIGINT: number;
            public static SIGIO: number;
            public static SIGKILL: number;
            public static SIGPIPE: number;
            public static SIGPROF: number;
            public static SIGPWR: number;
            public static SIGQUIT: number;
            public static SIGRTMAX: number;
            public static SIGRTMIN: number;
            public static SIGSEGV: number;
            public static SIGSTKFLT: number;
            public static SIGSTOP: number;
            public static SIGSYS: number;
            public static SIGTERM: number;
            public static SIGTRAP: number;
            public static SIGTSTP: number;
            public static SIGTTIN: number;
            public static SIGTTOU: number;
            public static SIGURG: number;
            public static SIGUSR1: number;
            public static SIGUSR2: number;
            public static SIGVTALRM: number;
            public static SIGWINCH: number;
            public static SIGXCPU: number;
            public static SIGXFSZ: number;
            public static SIOCGIFADDR: number;
            public static SIOCGIFBRDADDR: number;
            public static SIOCGIFDSTADDR: number;
            public static SIOCGIFNETMASK: number;
            public static SOCK_DGRAM: number;
            public static SOCK_RAW: number;
            public static SOCK_SEQPACKET: number;
            public static SOCK_STREAM: number;
            public static SOL_SOCKET: number;
            public static SO_BINDTODEVICE: number;
            public static SO_BROADCAST: number;
            public static SO_DEBUG: number;
            public static SO_DONTROUTE: number;
            public static SO_ERROR: number;
            public static SO_KEEPALIVE: number;
            public static SO_LINGER: number;
            public static SO_OOBINLINE: number;
            public static SO_PASSCRED: number;
            public static SO_PEERCRED: number;
            public static SO_RCVBUF: number;
            public static SO_RCVLOWAT: number;
            public static SO_RCVTIMEO: number;
            public static SO_REUSEADDR: number;
            public static SO_SNDBUF: number;
            public static SO_SNDLOWAT: number;
            public static SO_SNDTIMEO: number;
            public static SO_TYPE: number;
            public static STDERR_FILENO: number;
            public static STDIN_FILENO: number;
            public static STDOUT_FILENO: number;
            public static ST_MANDLOCK: number;
            public static ST_NOATIME: number;
            public static ST_NODEV: number;
            public static ST_NODIRATIME: number;
            public static ST_NOEXEC: number;
            public static ST_NOSUID: number;
            public static ST_RDONLY: number;
            public static ST_RELATIME: number;
            public static ST_SYNCHRONOUS: number;
            public static S_IFBLK: number;
            public static S_IFCHR: number;
            public static S_IFDIR: number;
            public static S_IFIFO: number;
            public static S_IFLNK: number;
            public static S_IFMT: number;
            public static S_IFREG: number;
            public static S_IFSOCK: number;
            public static S_IRGRP: number;
            public static S_IROTH: number;
            public static S_IRUSR: number;
            public static S_IRWXG: number;
            public static S_IRWXO: number;
            public static S_IRWXU: number;
            public static S_ISGID: number;
            public static S_ISUID: number;
            public static S_ISVTX: number;
            public static S_IWGRP: number;
            public static S_IWOTH: number;
            public static S_IWUSR: number;
            public static S_IXGRP: number;
            public static S_IXOTH: number;
            public static S_IXUSR: number;
            public static TCP_NODELAY: number;
            public static WCONTINUED: number;
            public static WEXITED: number;
            public static WNOHANG: number;
            public static WNOWAIT: number;
            public static WSTOPPED: number;
            public static WUNTRACED: number;
            public static W_OK: number;
            public static X_OK: number;
            public static _SC_2_CHAR_TERM: number;
            public static _SC_2_C_BIND: number;
            public static _SC_2_C_DEV: number;
            public static _SC_2_C_VERSION: number;
            public static _SC_2_FORT_DEV: number;
            public static _SC_2_FORT_RUN: number;
            public static _SC_2_LOCALEDEF: number;
            public static _SC_2_SW_DEV: number;
            public static _SC_2_UPE: number;
            public static _SC_2_VERSION: number;
            public static _SC_AIO_LISTIO_MAX: number;
            public static _SC_AIO_MAX: number;
            public static _SC_AIO_PRIO_DELTA_MAX: number;
            public static _SC_ARG_MAX: number;
            public static _SC_ASYNCHRONOUS_IO: number;
            public static _SC_ATEXIT_MAX: number;
            public static _SC_AVPHYS_PAGES: number;
            public static _SC_BC_BASE_MAX: number;
            public static _SC_BC_DIM_MAX: number;
            public static _SC_BC_SCALE_MAX: number;
            public static _SC_BC_STRING_MAX: number;
            public static _SC_CHILD_MAX: number;
            public static _SC_CLK_TCK: number;
            public static _SC_COLL_WEIGHTS_MAX: number;
            public static _SC_DELAYTIMER_MAX: number;
            public static _SC_EXPR_NEST_MAX: number;
            public static _SC_FSYNC: number;
            public static _SC_GETGR_R_SIZE_MAX: number;
            public static _SC_GETPW_R_SIZE_MAX: number;
            public static _SC_IOV_MAX: number;
            public static _SC_JOB_CONTROL: number;
            public static _SC_LINE_MAX: number;
            public static _SC_LOGIN_NAME_MAX: number;
            public static _SC_MAPPED_FILES: number;
            public static _SC_MEMLOCK: number;
            public static _SC_MEMLOCK_RANGE: number;
            public static _SC_MEMORY_PROTECTION: number;
            public static _SC_MESSAGE_PASSING: number;
            public static _SC_MQ_OPEN_MAX: number;
            public static _SC_MQ_PRIO_MAX: number;
            public static _SC_NGROUPS_MAX: number;
            public static _SC_NPROCESSORS_CONF: number;
            public static _SC_NPROCESSORS_ONLN: number;
            public static _SC_OPEN_MAX: number;
            public static _SC_PAGESIZE: number;
            public static _SC_PAGE_SIZE: number;
            public static _SC_PASS_MAX: number;
            public static _SC_PHYS_PAGES: number;
            public static _SC_PRIORITIZED_IO: number;
            public static _SC_PRIORITY_SCHEDULING: number;
            public static _SC_REALTIME_SIGNALS: number;
            public static _SC_RE_DUP_MAX: number;
            public static _SC_RTSIG_MAX: number;
            public static _SC_SAVED_IDS: number;
            public static _SC_SEMAPHORES: number;
            public static _SC_SEM_NSEMS_MAX: number;
            public static _SC_SEM_VALUE_MAX: number;
            public static _SC_SHARED_MEMORY_OBJECTS: number;
            public static _SC_SIGQUEUE_MAX: number;
            public static _SC_STREAM_MAX: number;
            public static _SC_SYNCHRONIZED_IO: number;
            public static _SC_THREADS: number;
            public static _SC_THREAD_ATTR_STACKADDR: number;
            public static _SC_THREAD_ATTR_STACKSIZE: number;
            public static _SC_THREAD_DESTRUCTOR_ITERATIONS: number;
            public static _SC_THREAD_KEYS_MAX: number;
            public static _SC_THREAD_PRIORITY_SCHEDULING: number;
            public static _SC_THREAD_PRIO_INHERIT: number;
            public static _SC_THREAD_PRIO_PROTECT: number;
            public static _SC_THREAD_SAFE_FUNCTIONS: number;
            public static _SC_THREAD_STACK_MIN: number;
            public static _SC_THREAD_THREADS_MAX: number;
            public static _SC_TIMERS: number;
            public static _SC_TIMER_MAX: number;
            public static _SC_TTY_NAME_MAX: number;
            public static _SC_TZNAME_MAX: number;
            public static _SC_VERSION: number;
            public static _SC_XBS5_ILP32_OFF32: number;
            public static _SC_XBS5_ILP32_OFFBIG: number;
            public static _SC_XBS5_LP64_OFF64: number;
            public static _SC_XBS5_LPBIG_OFFBIG: number;
            public static _SC_XOPEN_CRYPT: number;
            public static _SC_XOPEN_ENH_I18N: number;
            public static _SC_XOPEN_LEGACY: number;
            public static _SC_XOPEN_REALTIME: number;
            public static _SC_XOPEN_REALTIME_THREADS: number;
            public static _SC_XOPEN_SHM: number;
            public static _SC_XOPEN_UNIX: number;
            public static _SC_XOPEN_VERSION: number;
            public static _SC_XOPEN_XCU_VERSION: number;

            public static S_ISFIFO(param0: number): boolean;

            public static WCOREDUMP(param0: number): boolean;

            public static errnoName(param0: number): string;

            public static gaiName(param0: number): string;

            public static WEXITSTATUS(param0: number): number;

            public static WIFSTOPPED(param0: number): boolean;

            public static S_ISBLK(param0: number): boolean;

            public static S_ISREG(param0: number): boolean;

            public static WSTOPSIG(param0: number): number;

            public static WIFSIGNALED(param0: number): boolean;

            public static S_ISDIR(param0: number): boolean;

            public static S_ISLNK(param0: number): boolean;

            public static S_ISCHR(param0: number): boolean;

            public static WIFEXITED(param0: number): boolean;

            public static WTERMSIG(param0: number): number;

            public static S_ISSOCK(param0: number): boolean;
        }
    }
}

/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module system {
        export class StructPollfd extends javalangObject {
            public events: number;
            public fd: javaioFileDescriptor;
            public revents: number;
            public userData: javalangObject;

            public toString(): string;

            public constructor();
        }
    }
}

declare module android {
    export module system {
        export class StructStat extends javalangObject {
            public st_atime: number;
            public st_blksize: number;
            public st_blocks: number;
            public st_ctime: number;
            public st_dev: number;
            public st_gid: number;
            public st_ino: number;
            public st_mode: number;
            public st_mtime: number;
            public st_nlink: number;
            public st_rdev: number;
            public st_size: number;
            public st_uid: number;

            public toString(): string;

            public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number);
        }
    }
}

declare module android {
    export module system {
        export class StructStatVfs extends javalangObject {
            public f_bavail: number;
            public f_bfree: number;
            public f_blocks: number;
            public f_bsize: number;
            public f_favail: number;
            public f_ffree: number;
            public f_files: number;
            public f_flag: number;
            public f_frsize: number;
            public f_fsid: number;
            public f_namemax: number;

            public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number);

            public toString(): string;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module system {
        export class StructUtsname extends javalangObject {
            public machine: string;
            public nodename: string;
            public release: string;
            public sysname: string;
            public version: string;

            public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);

            public toString(): string;
        }
    }
}
