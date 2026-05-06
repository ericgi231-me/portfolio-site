import { useState, useEffect } from 'react';

interface GuestbookEntry {
  id: number;
  name: string;
  message: string | null;
  time_stamp: string;
}

const GuestBookPage = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch entries on load
  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await fetch('/api/guestbook/read.php');
      const data = await response.json();
      setEntries(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/guestbook/insert.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('✓ Name added!');
        setName('');
        setMessage('');
        fetchEntries();
      } else {
        setStatus(`✗ Error: ${data.error}`);
      }
    } catch (error) {
      setStatus('✗ Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-lg py-xl">
      <div className="bg-surface border border-border rounded-lg shadow-md overflow-hidden">
        {/* Compact Sign Form */}
        <div className="border-b border-border p-md bg-background-alt">
          <form onSubmit={handleSubmit} className="flex gap-2 items-start">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              required
              className="w-32 px-3 py-2 border border-border rounded-md bg-background text-text focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              placeholder="Name"
            />
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={256}
              className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-text focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              placeholder="Leave a message (optional, max 256 characters)"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-[background-color] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-sm"
              style={{ transitionDuration: 'var(--transition-base)' }}
            >
              {loading ? 'Signing...' : 'Sign'}
            </button>
          </form>
          {status && (
            <p className={`text-sm mt-2 ${
              status.startsWith('✓') ? 'text-accent' : 'text-red-500'
            }`}>
              {status}
            </p>
          )}
        </div>

        {/* Entries List */}
        <div className="p-md">
          
          {entries.length === 0 ? (
            <div className="text-center text-text-secondary py-8">
              No entries yet. Be the first to sign!
            </div>
          ) : (
            <div className="space-y-3">
              {entries.map((entry) => (
                <div
                  key={entry.id}
                  className="border-b border-border pb-3 last:border-0 last:pb-0"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-text">{entry.name}</h3>
                    <span className="text-xs text-text-secondary">
                      {formatDate(entry.time_stamp)}
                    </span>
                  </div>
                  {entry.message ? (
                    <p className="text-text text-sm leading-relaxed">{entry.message}</p>
                  ) : null}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuestBookPage;