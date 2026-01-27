import { useState, useEffect } from 'react';

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
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
        setStatus('✓ Entry added successfully!');
        setName('');
        setMessage('');
        fetchEntries(); // Refresh the list
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
      <h1 className="text-4xl font-bold text-center mb-lg">Guest Book</h1>

      {/* Form */}
      <div className="bg-surface border border-border rounded-lg p-lg mb-xl shadow-md">
        <h2 className="text-2xl font-bold mb-md">Sign the Guest Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-text mb-2 font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              required
              className="w-full px-4 py-2 border border-border rounded-md bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-text mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={256}
              required
              rows={4}
              className="w-full px-4 py-2 border border-border rounded-md bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Leave your message (max 256 characters)"
            />
            <p className="text-text-secondary text-sm mt-1">
              {message.length}/256 characters
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-md font-bold hover:bg-primary-dark transition-[background-color] disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ transitionDuration: 'var(--transition-base)' }}
          >
            {loading ? 'Submitting...' : 'Submit Entry'}
          </button>

          {status && (
            <p className={`text-center font-medium ${
              status.startsWith('✓') ? 'text-accent' : 'text-red-500'
            }`}>
              {status}
            </p>
          )}
        </form>
      </div>

      {/* Entries List */}
      <div>
        <h2 className="text-2xl font-bold mb-md">
          Entries ({entries.length})
        </h2>
        
        {entries.length === 0 ? (
          <div className="bg-surface border border-border rounded-lg p-lg text-center text-text-secondary">
            No entries yet. Be the first to sign!
          </div>
        ) : (
          <div className="space-y-4">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-surface border border-border rounded-lg p-md shadow-sm hover:shadow-md transition-shadow"
                style={{ transitionDuration: 'var(--transition-base)' }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-text">{entry.name}</h3>
                  <span className="text-sm text-text-secondary">
                    {formatDate(entry.time_stamp)}
                  </span>
                </div>
                <p className="text-text leading-relaxed">{entry.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GuestBookPage;